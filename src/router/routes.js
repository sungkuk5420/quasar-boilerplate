const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Index.vue") }]
  },
  {
    path: "/login",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Login.vue") }]
  },
  {
    path: "/register",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Register.vue") }]
  },
  {
    path: "/profile",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Profile.vue") }]
  }
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}


export default routes;
