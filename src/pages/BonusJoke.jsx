import { useRouteLoaderData } from "react-router-dom";

function BonusJoke() {
  const data = useRouteLoaderData("about-loader");
  const bonusJoke = data.value;
  return <h2>{bonusJoke}</h2>;
}

export default BonusJoke;
