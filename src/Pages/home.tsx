import Header from "../components/header";
import Welcome from "../components/welcome"
import ConstructionError from "../components/alert";

export default function Home() {
  return (
    <>
        <Header />
        <Welcome />
        <ConstructionError />
    </>
  );
}
