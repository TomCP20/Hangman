import { Link } from "react-router-dom";
import Diagram from "../components/Diagram";
import { OptionButton } from "../components/OptionButton";

export function Home() {
  return (
    <>
      <Diagram stage={6} />
      <div className="text-center">
        <Link to={"game"}>
          <OptionButton>Play!</OptionButton>
        </Link>
      </div>
    </>
  );
}


