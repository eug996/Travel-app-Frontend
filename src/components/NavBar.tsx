// src/components/NavBar.tsx
  
import { Link } from "react-router-dom";
  
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav>
      <Link to="/">Location app</Link>
      <Link to="/create" className="btn btn-primary">
        Create Destinations
      </Link>
    </nav>
  );
}