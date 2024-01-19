
import { useState, useEffect } from 'react';

export default function useCategory(category, pageNum) {
  const [data, setData] = useState([]);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&page=${pageNum}&apiKey=3a63208ab5f54b399aa7498b98db65f6`;
        const response = await fetch(url);
        const result = await response.json();

        // Update totalResults state
        setTotalResults(result.totalResults);

        // Update data state
        setData(result.articles);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [category, pageNum]);

  return { data, totalResults };
}
