import React, { useEffect, useState } from "react";
import { fetchProducts } from "../api";
import ProductCard from "./ProductCard";
import { HiArrowLongRight } from "react-icons/hi2";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleProducts, setVisibleProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetchProducts();
        setProducts(response.data);
        setVisibleProducts(response.data.slice(0, 6));
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  const handleLoadMore = () => {
    setVisibleProducts(products);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div style={{ background: "#f7f6ec" }}>
      <div className="container-md  " style={{ paddingTop: 70, padding: 80 }}>
        <div className="d-flex flex-row justify-content-between align-items-center">
          <h2 className="fw-bolder ">Collection</h2>
          {visibleProducts.length < products.length && (
            <button
              className=" text-decoration-none border-0 bg-transparent fs-5 text-uppercase mb-0 "
              style={{ color: "#8b8983" }}
              onClick={handleLoadMore}
            >
              View All Collection <HiArrowLongRight />
            </button>
          )}
        </div>

        <div
          style={{
            borderBottom: "1px solid black",
            margin: "20px 0",
          }}
        />
        <div className="row justify-content-md-center">
          {visibleProducts.map((product) => (
            <div key={product._id} className="col-lg-4 col-sm-6 ">
              <ProductCard product={product} />
            </div>
          ))}
          {visibleProducts.length < products.length && (
            <button
              onClick={handleLoadMore}
              className="btn btn-dark rounded-pill text-uppercase"
              style={{ width: 150, color: "#f7f6ec" }}
            >
              Load More
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
