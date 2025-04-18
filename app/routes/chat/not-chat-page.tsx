import { MessageSquare } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

const NotChatPage = () => {
  return (
    <div className="flex-1 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex items-center justify-center mb-4">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
              <MessageSquare className="h-8 w-8 text-primary" />
            </div>
          </div>
          <CardTitle className="text-center text-2xl font-bold">
            Bienvenido a NexTalk
          </CardTitle>
          <CardDescription className="text-center text-base mt-2">
            Tu centro de comunicación empresarial
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-4">
          <p className="text-sm text-muted-foreground text-center">
            Selecciona un contacto o inicia una nueva conversación para comenzar
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
export default NotChatPage;
