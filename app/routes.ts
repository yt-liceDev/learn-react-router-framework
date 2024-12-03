import { type RouteConfig, index, layout, route } from "@react-router/dev/routes"

export default [
  layout("./layouts/main-layout.tsx", [
    index("routes/home.tsx"),
    route("about", "routes/about.tsx"),
    route("posts/:id", "routes/post.tsx"),
  ]),
] satisfies RouteConfig
