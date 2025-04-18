import {redirect} from "react-router"
export async function action({
    request,
  }: Route.ActionArgs) {
    const session = await getSession(
      request.headers.get("Cookie")
    );
    return redirect("/auth/login", {
      headers: {
        "Set-Cookie": await destroySession(session),
      },
    });
  }
  