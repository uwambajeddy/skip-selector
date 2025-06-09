import { useEffect, useState } from "react";

export const useSkips = () => {
 const [skips, setSkips] = useState([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);

 useEffect(() => {
  const fetchSkips = async () => {
   try {
    setLoading(true);
    const response = await fetch(
     "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
    );
    const data = await response.json();

    // Simulate network delay
    await new Promise((res) => setTimeout(res, 2500));
    setSkips(data);
   } catch (err) {
    setError("Failed to load skip options");
   } finally {
    setLoading(false);
   }
  };

  fetchSkips();
 }, []);

 return { skips, loading, error };
};
