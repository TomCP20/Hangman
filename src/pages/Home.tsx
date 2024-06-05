import { Link } from "react-router-dom";
import Diagram from "../components/Diagram";

export function Home() {
  return (
    <>
      <Diagram stage={6} />
      <div className="text-center">
        <Link to={"game"}>
          <button type='button' className="text-center font-mono text-2xl m-1 p-1 h-12 w-24 rounded-md border border-solid border-black bg-gray-200 hover:bg-gray-300">Play!</button>
        </Link>
      </div>
    </>
  );
}
