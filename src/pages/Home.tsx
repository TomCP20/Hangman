import { Link } from "react-router-dom";
import Diagram from "../components/Diagram";

export function Home() {
  return (
    <>
      <Diagram stage={6} />
      <Link to={"game"}>Play Now!</Link>
    </>
  );
}
