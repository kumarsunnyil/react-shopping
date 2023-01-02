import { CartState } from "../../context/Context";
import SingleProduct from "../SingleProduct/SingleProduct";
import Filters from "../../components/Filters/Filters";

import "./ShopPage.css";
import MainScreen from "../../components/MainScreen";

const ShopPage = () => {
  const {
    state: { products },
    productState: { sort, byStock, byFastDelivery, byRating, searchQuery },
  } = CartState();

  const transformProducts = () => {
    let sortedProducts = products;
    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }

    if (!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }

    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
    }

    if (byRating) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.ratings >= byRating
      );
    }

    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery)
      );
    }

      return sortedProducts;


  }
  return (
    <div className="shop-home">
      <Filters />
      <div className="shop-product-container">
      
      {
        transformProducts().map((product) => {
          return <SingleProduct product={product} key={product.id}  />
        })}
      </div>
    </div>
  );
};

export default ShopPage;
