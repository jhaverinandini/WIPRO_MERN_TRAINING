import { useEffect, useState } from "react";

function useFetchData(fetchFn) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchFn().then(res => setData(res));
  }, [fetchFn]);

  return data;
}

export default useFetchData;