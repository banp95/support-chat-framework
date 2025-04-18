import { NavLink, useParams } from "react-router";
import { Button, buttonVariants } from "~/components/ui/button";
import { ScrollArea } from "~/components/ui/scroll-area";
import type { Client } from "~/interfaces/chat.interface";
interface Props {
  clients: Client[];
}
export const ContactList = ({ clients }: Props) => {
  const { id } = useParams();
  return (
    <ScrollArea className="h-[calc(100vh-134px)]">
      <div className="space-y-4 p-4">
        <div className="space-y-1">
          <h3 className="px-2 text-sm font-semibold">Contacts</h3>
          <div className="space-y-1">
            {clients.map((client) => (
              <NavLink
                key={client.id}
                className={({ isActive, isPending }) =>
                  buttonVariants({
                    variant: "ghost",
                    className: `w-full justify-start text-gray-500 ${
                      isActive && "bg-gray-100 text-gray-900"
                    } ${isPending && "bg-gray-200 text-gray-900"}`,
                  })
                }
                to={`/chat/client/${client.id}`}
              >
                <div className="h-6 w-6 rounded-full bg-blue-500 mr-2 flex-shrink-0 flex items-center justify-center text-white text-xs">
                  {client.name.charAt(0).toUpperCase()}
                  {client.name.split(" ")[1]?.charAt(0).toUpperCase() || ""}
                </div>
                <span
                  className={`text-sm font-medium text-gray-900 ${
                    id === client.id ? "font-semibold" : ""
                  }`}
                >
                  {client.name}
                </span>
              </NavLink>
            ))}
          </div>
        </div>
        <div className="pt-4 border-t mt-4">
          <h3 className="px-2 text-sm font-semibold mb-1">Recent</h3>
          <Button variant="ghost" className="w-full justify-start">
            <div className="h-6 w-6 rounded-full bg-gray-500 mr-2 flex-shrink-0 flex items-center justify-center text-white text-xs">
              TM
            </div>
            Thomas Miller
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <div className="h-6 w-6 rounded-full bg-red-500 mr-2 flex-shrink-0 flex items-center justify-center text-white text-xs">
              SB
            </div>
            Sarah Brown
          </Button>
        </div>
      </div>
    </ScrollArea>
  );
};
