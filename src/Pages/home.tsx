// import ConstructionError from "../components/alert";
import Header from "../components/header";
// import Posts from "../components/Posts";
import Welcome from "../components/welcome";
import ConstructionError from "../components/alert";
// import { Provider } from "@/components/ui/provider"
import Posts from "../components/Posts";

export default function Home() {
  return (
    <>
        <ConstructionError />
         <Header />
          <Welcome />
          <Posts />
    </>
  );
}
