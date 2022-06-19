import { lazy } from "react"

const Dashboard = lazy(() => import("../views/Dashboard"))
const MedicineAdd = lazy(() => import("../views/Medicine/Add"))
const Medicine = lazy(() => import("../views/Medicine"))
const Profile = lazy(() => import("../views/Profile"))

const mainRoutes = [
  {
    path: "/dashboard",
    component: Dashboard,
    permission: "DASHBOARD",
  },
  {
    path: "/medicine",
    component: Medicine,
    permission: "MEDICINE",
  },
  {
    path: "/medicine/add",
    component: MedicineAdd,
    permission: "MEDICINE/CREATE",
  },
  {
    path: "/profile",
    component: Profile,
    permission: "PROFILE",
  },
]

export default mainRoutes
