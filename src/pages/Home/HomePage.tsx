// src/pages/Home/HomePage.tsx
  
import "./HomePage.css";
import { useFetch } from "../../hooks/useFetch";
import LocationList, { type Location } from "../../components/LocationList/LocationList";



// type RespondData = {
//   locations: Location [];
// }
  
  
export default function HomePage() {
  const { data, error } = useFetch<Location[]>(process.env.REACT_APP_DB_URL);
  if (error)
      return (
          <p aria-live="polite" role="status">
              {error.message}
          </p>
      );
  if (!data)
      return (
          <p aria-live="polite" role="status">
              Loading...
          </p>
      );
  
  return <LocationList locations={data} />;
  

}
