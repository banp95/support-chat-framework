import { Link } from "react-router";
import { sleep } from "~/lib/sleep";
import type { Route } from "./+types/testing-page";

// export function meta() {
//   return [
//     { title: "Very cool app" },
//     {
//       property: "og:title",
//       content: "Very cool app",
//     },
//     {
//       name: "description",
//       content: "This app is the best",
//     },
//   ];
// }
export async function clientLoader() {
  await sleep(2000);
  return { message: "cargando..." };
}
export function HydrateFallback() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent" />
        <p className="text-lg font-medium text-muted-foreground">Cargando...</p>
      </div>
    </div>
  );
}
// export async function loader() {
//   return { message: "hola desde testing -server" };
// }

// export async function clientLoader({ serverLoader }: Route.ClientLoaderArgs) {
//   const { message } = await serverLoader();
//   // call the server loader
//   // And/or fetch data on the client
//   // Return the data to expose through useLoaderData()
//   return { message: "hola mundo", server: message };
// }
export default function TestingPage({
  loaderData,
  actionData,
  params,
  matches,
}: Route.ComponentProps) {
  return (
    <div className="">
      <h1>Welcome</h1>
      <p>laode data {JSON.stringify(loaderData)}</p>
      <p>laode action {JSON.stringify(actionData)}</p>
      <p>laode paramas {JSON.stringify(params)}</p>
      <p>laode router {JSON.stringify(matches)}</p>
      <Link to={"/auth/testing-router"}>arrg</Link>
    </div>
  );
}
