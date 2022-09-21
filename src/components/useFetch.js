import { useEffect, useState } from "react";

const useFetch = (request) => {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(request)
        .then((response) => {
          if (response.ok === false) {
            throw Error("data not found , please try for different");
          } else {
            return response.json();
          }
        })
        .then((data) => {
          setData(data);
          setPending(false);
        })
        .catch((error) => {
          setError(error.message);
          setPending(false);
        });
    }, 500);
  }, [request]);

  return { data, pending, error };
};

export default useFetch;
