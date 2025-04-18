import { ContactInformation } from "./contact-information";
import { ContactInformationSkeleton } from "./contact-information-skeleton";
import { NotContactSelected } from "./not-contact-selected";

export const ContactInformationCard = () => {
  return <NotContactSelected />;
  return <ContactInformationSkeleton />;
  return <ContactInformation />;
};
