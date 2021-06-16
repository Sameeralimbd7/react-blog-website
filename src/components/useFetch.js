import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setdata] = useState(null);
  const [isPending, setisPending] = useState(true);
  const [error, seterror] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((response) => response.json())
        .then((data) => {
          setdata(data);
          setisPending(false);
          seterror(null);
          document.body.scrollTop = 0;
        })
        .catch((error) => {
          setisPending(false);
          seterror(error.message);
        });
    }, 500);

    return () => abortCont.abort();
  }, [url]);

  return { data, isPending, error };
}

export { useFetch };
