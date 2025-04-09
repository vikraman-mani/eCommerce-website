import { useState, useEffect } from "react";

function useFetch(url) {
  let [products, setProducts] = useState([]);
  let [error, setError] = useState("");
  let [isloading, setLoading] = useState(true);

  useEffect(() => {
    let fetchApi = async () => {
      try {
        let response = await fetch(url);
        if (response.ok) {
          let data = await response.json();
          setProducts(data);
        } else {
          throw new Error("Something went wrong!");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchApi();
  }, []);

  return { products, error, isloading };
}

export default useFetch;
