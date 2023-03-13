import {
  Databases,
  Account,
  Storage,
  ID,
  Models,
  Client,
  Locale,
  Avatars,
  Query,
  Teams,
  Functions,
} from "appwrite";
import { Server } from "#/utils/config";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

type PreviewFileType = {
  project?: string;
  width?: string;
  height?: string;
  gravity?: string;
  quality?: string;
  borderWidth?: string;
  borderColor?: string;
  borderRadius?: string;
  opacity?: string;
  rotation?: string;
  background?: string;
  output?: string;
};

type SdkType = {
  database: Databases;
  account: Account;
  storage: Storage;
  client: Client;
  locale: Locale;
  avatar: Avatars;
  team: Teams;
  func: Functions;
};

type ApiType = {
  sdk: null | SdkType;
  provider: () => SdkType;
  createAccount: (
    email: string,
    password: string,
    name: string
  ) => Promise<Models.Account<Models.Preferences>>;
  getAccount: () => Promise<Models.Account<Models.Preferences>>;
  setSession: (hash: string | RequestCookie) => void;
  createSession: (email: string, password: string) => Promise<Models.Session>;
  createAnonymousSession: () => Promise<Models.Session>;
  getSession: () => Promise<Models.Session>;
  deleteCurrentSession: () => Promise<{}>;
  createTeam: (teamId: string, name: string) => Promise<Models.Team>;
  createDocument: (
    collectionId: string,
    data: any,
    permissions?: string[]
  ) => Promise<any>;
  listDocuments: (
    collectionId: string,
    order?: string[]
  ) => Promise<Models.DocumentList<Models.Document>>;
  getDocument: (
    documentId: string,
    collectionId: string
  ) => Promise<Models.Document>;
  updateDocument: (
    collectionId: string,
    documentId: string,
    data: any
  ) => Promise<any>;
  deleteDocument: (collectionId: string, documentId: string) => Promise<{}>;
  createFile: (file: File) => Promise<Models.File>;
  getFile: (fileId: string) => Promise<Models.File>;
  getFilePreview: (fileId: string, option: PreviewFileType) => URL;
  deleteFile: (fileID: string) => Promise<{}>;
  getMessages: (functionId: string, data?: object) => Promise<Models.Execution>;
  checkSessionStatus: () => Promise<Models.Session | null>;
};

const api: ApiType = {
  sdk: null,

  provider: () => {
    if (api.sdk) {
      return api.sdk;
    }
    const client = new Client()
      .setEndpoint(Server.endpoint)
      .setProject(Server.project);

    const account = new Account(client);
    const database = new Databases(client);
    const storage = new Storage(client);
    const locale = new Locale(client);
    const avatar = new Avatars(client);
    const team = new Teams(client);
    const func = new Functions(client);

    api.sdk = {
      database,
      account,
      storage,
      client,
      locale,
      avatar,
      team,
      func,
    };

    return api.sdk;
  },

  createAccount: async (email, password, name) => {
    return await api
      .provider()
      .account.create("unique()", email, password, name);
  },

  getAccount: async () => {
    return await api.provider().account.get();
  },

  setSession: (hash) => {
    const authCookies: any = {};
    authCookies["a_session_" + Server.project] = hash;
    api.provider().client.headers["X-Fallback-Cookies"] =
      JSON.stringify(authCookies);
  },

  createSession: async (email, password) => {
    return await api.provider().account.createEmailSession(email, password);
  },

  createAnonymousSession: async () => {
    return await api.provider().account.createAnonymousSession();
  },

  getSession: async () => {
    return await api.provider().account.getSession("current");
  },

  deleteCurrentSession: async () => {
    return await api.provider().account.deleteSession("current");
  },

  createTeam: async (teamId: string, name: string) => {
    return await api.provider().team.create(teamId, name);
  },

  createDocument: async (collectionId, data, permissions = []) => {
    return await api
      .provider()
      .database.createDocument(
        Server.databaseID,
        collectionId,
        ID.unique(),
        data,
        permissions
      );
  },

  listDocuments: async (collectionId, order) => {
    let newOrder = order ? order : [Query.orderAsc("$id")];
    return await api
      .provider()
      .database.listDocuments(Server.databaseID, collectionId, newOrder);
  },

  getDocument: async (documentId, collectionId) => {
    return await api
      .provider()
      .database.getDocument(Server.databaseID, collectionId, documentId);
  },

  updateDocument: async (collectionId, documentId, data) => {
    return await api
      .provider()
      .database.updateDocument(
        Server.databaseID,
        collectionId,
        documentId,
        data
      );
  },

  deleteDocument: async (collectionId, documentId) => {
    return await api
      .provider()
      .database.deleteDocument(Server.databaseID, collectionId, documentId);
  },

  createFile: async (file) => {
    return await api
      .provider()
      .storage.createFile(Server.bucketID, ID.unique(), file);
  },

  getFile: async (fileId) => {
    return await api.provider().storage.getFile(Server.bucketID, fileId);
  },

  getFilePreview: (fileId, option) => {
    const baseUrl =
      Server.endpoint +
      `/storage/buckets/${Server.bucketID}/files/${fileId}/preview`;

    const url = new URL(baseUrl);
    option.project = Server.project;
    url.search = new URLSearchParams(option).toString();

    return url;
  },

  deleteFile: async (fileID) => {
    return await api.provider().storage.deleteFile(Server.bucketID, fileID);
  },

  getMessages: async (functionId, data = {}) => {
    return await api
      .provider()
      .func.createExecution(functionId, JSON.stringify(data));
  },

  checkSessionStatus: async () => {
    try {
      return await api.getSession();
    } catch (error) {
      return null;
    }
  },
};

export default api;
