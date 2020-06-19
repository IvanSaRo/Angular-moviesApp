
import { HomeComponent } from "./components/home/home.component";
import { SearchComponent } from "./components/search/search.component";


export const ROUTES = [
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "search",
    component: SearchComponent,
  },
  {
    path: "search/:text",
    component: SearchComponent,
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


