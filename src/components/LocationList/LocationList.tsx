import "./LocationList.css";
import { Link } from "react-router-dom";
 
 
  export type Location  = {
    location_id: string;
    name: string;
    country: string;
    photo: string;
    description: string;
  };
 
  export default function LocationList({ locations }: { locations: Location[] }) {
    return (
      <div className="location-grid">
        {locations.map((location) => (
          <article key={location.location_id} className="location-card">
            <h3>{location.name} , {location.country}</h3>
            <div className="image-wrapper">
              <img src={location.photo} alt="" />
            </div>
            <p>{location.description}</p>
 
 
            <p>
              {location.description.substring(0, 80)} {location.description.length > 80 ? "...": ""}
            </p>
            <Link
              to={`/locations/${location.location_id}`}
              className="btn btn-secondary"
            >
              View description
            </Link>
          </article>
        ))}
      </div>
    );
  }
 
