// src/pages/Location/LocationPage.tsx
  
import "./LocationPage.css";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
  import type { Location } from "../../components/LocationList/LocationList";



  

export default function LocationPage() {
    const { locationId } = useParams();

    const { data, error } = useFetch<Location>(`${process.env.REACT_APP_DB_URL}/${locationId}`);

    const { location_id, name, photo, country, description } = data;
    return (
        <article className="recipe">
            <h1>{name}</h1>
            <h1>{photo}</h1>
            <h1>{country}</h1>
            <h1>{description}</h1>
            <h1>{location_id}</h1>
            
        </article>

        
    );
    
  
    
  

  
}
