
import { HomeComponent } from "./components/home/home.component";


export const ROUTES = [
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home",
  },
  {
    path: "**",
    pathMatch: "full",
    redirectTo: "home",
  },
];


