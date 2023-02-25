import { useEffect, useState } from "react";
import { getGifs } from "./Gift";


export const UseFetchGifs = (category) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getImages();
  }, []);

  const getImages = async () => {
    const images = await getGifs(category);
    setImages(images);
  };

  return {
    images: images,
    isLoading: false,
  };
};
