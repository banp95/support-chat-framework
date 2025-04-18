import { useLoaderData, useNavigation, useParams } from "react-router";
import type { Client } from "~/interfaces/chat.interface";
import { ContactInformation } from "./contact-information";
import { ContactInformationSkeleton } from "./contact-information-skeleton";
import { NotContactSelected } from "./not-contact-selected";
interface Props {
  client?: Client;
}
export const ContactInformationCard = () => {
  const { id } = useParams();
  const { client } = useLoaderData();
  const { state } = useNavigation();

  const isPending = state === "loading";

  if (client) return <ContactInformation client={client} />;

  if (!client) return <NotContactSelected />;

  if (isPending) return <ContactInformationSkeleton />;
  if (!id) return <NotContactSelected />;
  // const client = clients.find((client: Client) => client.id === id);
  return <ContactInformation client={client} />;
};
