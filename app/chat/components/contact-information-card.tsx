import { useLoaderData, useNavigation, useParams } from "react-router";
import type { Client } from "~/interfaces/chat.interface";
import { ContactInformation } from "./contact-information";
import { ContactInformationSkeleton } from "./contact-information-skeleton";
import { NotContactSelected } from "./not-contact-selected";

export const ContactInformationCard = () => {
  const { id } = useParams();
  const { clients = [] } = useLoaderData();
  const { state } = useNavigation();

  const isPending = state === "loading";

  if (isPending) return <ContactInformationSkeleton />;
  if (!id) return <NotContactSelected />;
  const client = clients.find((client: Client) => client.id === id);
  if (!client) return <NotContactSelected />;
  return <ContactInformation client={client} />;
};
