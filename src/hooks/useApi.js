import { useEffect } from "react";

const useApi = (apiFunc, param = null) => {
  useEffect(() => {
    const func = async () => {
      try {
        await apiFunc(param);
      } catch (e) {
        console.log(`에러: ${e}`);
      }
    };
    func();
  }, [apiFunc, param]);
};

export default useApi;
