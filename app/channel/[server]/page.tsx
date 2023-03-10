import api from "#/utils/appwrite";
import { Query } from "appwrite";
import { redirect } from "next/navigation";

export default async function Channel({ params }: { params: any }) {
  const sidebar = await api.listDocuments("6407d0c0eb16af0ec5e2", [
    Query.equal("default", true),
    Query.equal("server", params.server),
  ]);
  if (sidebar) redirect(`channel/${params.server}/${sidebar.documents[0].$id}`);

  return null;
}
