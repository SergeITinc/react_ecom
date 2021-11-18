import "./App.css";
import FeaturedTitle from "./components/FeaturedTitle";

// import logo from "../public/images/autumn.png"

function App () {
  return (<>
    <div className="max-w-screen-xl m-auto ">
      <div className={"xl:px-0 px-2"}>
        <FeaturedTitle text={"Featured Products"} className={"py-3"} />
        <div className={"sm:flex justify-between items-center sm:space-x-5 space-x-0 sm:space-y-0 space-y-3"}>
          <div className={"sm:w-2/4"}>
            <div className={"aspect-w-21 aspect-h-9"}>
              <img src="../public/images/trikotazh.jpg" alt="test" />
            </div>
          </div>
          <div className={"sm:w-2/4"}>
            <div className={"aspect-w-21 aspect-h-9"}>
              <img src="../public/images/trikotazh.jpg" alt="test" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>);
}

export default App;
