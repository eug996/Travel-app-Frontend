import { Link } from "react-router-dom";
  
  import "./LocationList.css";

export type Location = {
    location_id: string;
    name: string;
    country: string;
    photo: string;
    description: string;
  };
  

  
export default function LocationPage({locations}:{locations: Location[]}) {

  return (
    <div className="location-grid">
        {locations.map((location) => (
             <article key={location.location_id} className="location-card">
                    <h3>{location.name}</h3>
               <div className="image-wrapper">
                    <img src={location.photo} alt="" />
               </div>
               <h3>{location.description}</h3>

            
             <Link
               to={`/locations/${location.location_id}`}
               className="btn btn-secondary"
              >
                View recipe
              </Link>
            </article>
        ))}
    </div>
    );

}
