import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Cart from "../views/Cart.vue";
import Add from "../views/Add.vue";
import Profile from "../views/Profile.vue";
import Signup from "../views/Signup.vue";
import Demo from "../views/Demo.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: Home, name: "Home" },
    { path: "/login", component: Login, name: "Login" },
    { path: "/signup", component: Signup, name: "Signup" },
    { path: "/add", component: Add, name: "Add" },
    { path: "/cart", component: Cart, name: "Cart" },
    { path: "/profile", component: Profile, name: "Profile" },
    { path: "/demo", component: Demo, name: "Demo" },
  ],
});

export default router;
