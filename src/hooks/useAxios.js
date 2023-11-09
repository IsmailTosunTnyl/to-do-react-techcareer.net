import axios from 'axios';
import { useState, useEffect } from 'react';

const useAxiosFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get(url);
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
    }
  };

  const addData = async (data) => {
   
    setIsLoading(true);

    try {
      const response = await axios.post(url, data);
      setData(response.data);
      
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
    }
    
  };


  useEffect(() => {
    fetchData();
  }, []);

  return {
    data,
    fetchData,
    isLoading,
    isError,
    addData,

  };
};

const useAxiosPost = (url, options) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const addData = async (data) => {
   
    setIsLoading(true);

    try {
      const response = await axios.post(url, data);
      setData(response.data);
      
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
    
    }
    
  };

  return {
    data,
    addData,
    isLoading,
    isError,
  };
};
export { useAxiosPost };
export default useAxiosFetch;