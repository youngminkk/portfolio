import React, { useState, useEffect } from "react";
import link from "../utils/link";
import smooth from "../utils/smooth";
import Loading from "./Loading";

const LoadingManager = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      link();
      smooth();
    }
  }, [isLoading]);

  if (isLoading) {
    return <Loading />;
  }

  return children;
};

export default LoadingManager;