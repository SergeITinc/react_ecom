import "./App.css";
import FeaturedTitle from "./components/FeaturedTitle";
import { products_row_one, products_row_three, products_row_two } from "./misc/fakeData";
import ProductList from "./components/ProductList";

function App () {
  return (<>
    <div className="max-w-screen-xl m-auto mb-20">
      <div className={"xl:px-0 px-2"}>
        <FeaturedTitle text={"Featured Products!!!"} className={"py-3"} />
        <div className={"sm:flex justify-between items-center sm:space-x-5 space-x-0 sm:space-y-0 space-y-3"}>
          <div className={"sm:w-2/4"}>
            <div className={"aspect-w-16 aspect-h-9"}>
              <img src="..//images/banner_left.png" alt="test" />
            </div>
          </div>
          <div className={"sm:w-2/4"}>
            <div className={"aspect-w-16 aspect-h-9"}>
              <img src="..//images/banner_right.png" alt="test" />
            </div>
          </div>
        </div>
      </div>

      <ProductList heading={'Smart Watches'} data={products_row_one}/>
      <ProductList heading={'Ladies Shoes'} data={products_row_two}/>
      <ProductList heading={'Gents Shoes'} data={products_row_three}/>
    </div>
  </>);
}

export default App;
