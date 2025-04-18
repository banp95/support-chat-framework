import { Navigate, redirect } from "react-router";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Bienvenido a react-router" },
    { name: "description", content: "Este es un curso" },
  ];
}

export async function loader() {
  return redirect("/chat");
}

export default function Home() {
  return <Navigate to={"/chat"} />;
}
