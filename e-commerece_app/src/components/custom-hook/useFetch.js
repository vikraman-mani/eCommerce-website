import { useState, useEffect } from "react";
import axios from "axios";

function useFetch(url) {
  let [products, setProducts] = useState([]);
  let [error, setError] = useState("");
  let [isloading, setLoading] = useState(true);

  useEffect(() => {
    let fetchApi = async () => {
      try {
        // let response = await fetch(url);

        let response = await axios.get(url);
        setProducts(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchApi();
  }, []);

  return { products, error, isloading, setProducts };
}

export default useFetch;
