import React, { useContext, useEffect, useState } from "react";

const API_URL = `http://www.omdbapi.com/?apikey=64f75784`;

const AppContext = React.createContext();
// we are getting the children and that is app component in our case
const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [isError, setIsError] = useState({ show:"false", msg:""})
  const [ query, setQuery] = useState("titanic");
  
  const getMovies = async (url) =>{
    try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        if(data.Response ==="True") {
            setIsLoading(false);
            setMovie(data.Search);
        } else {
setIsError({
    show: true,
    msg: data.error,
        });
        }
    }catch (error) {
        console.log(error);
    }
  };


 useEffect(() => {
    getMovies(`${API_URL}&s=${query}`);
 }, [query]); 
 
 //const { isLoading, isError, movie } = useFetch(&s=${query});

  return (
    <AppContext.Provider value={{ movie, isLoading, isError, query, setQuery }}>
      {children}
   </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };