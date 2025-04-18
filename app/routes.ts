import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  //Home
  index("routes/home.tsx"),
  //auth
  ...prefix("/auth", [
    layout("./layouts/auth-layout.tsx", [
      route("/login", "./routes/auth/login-page.tsx"),
      route("/register", "./routes/auth/register-page.tsx"),
    ]),
  ]),
  ...prefix("/chat", [
    layout("./layouts/chat-layout.tsx", [
      index("./routes/chat/not-chat-page.tsx"),
      route("/client-chat", "./routes/chat/client-chat-page.tsx"),
    ]),
  ]),
] satisfies RouteConfig;
