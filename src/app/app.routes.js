
import { HomeComponent } from "./components/home/home.component";
import { SearchComponent } from "./components/search/search.component";
import { MovieComponent} from "./components/movie/movie.component"


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
    path: "movie/:id/:page",
    component: MovieComponent,
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


