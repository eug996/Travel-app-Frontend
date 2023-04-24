// src/components/NavBar.tsx
  
import { Link } from "react-router-dom";
  
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav>
      <Link to="/">Location app</Link>

      <form
      id="search-form"
      role="search"
      action="/search"
      className="input-group"
  >
  <input
      aria-label="Search Location"
      placeholder="Search"
      type="search"
      name="q"
    required
  />
  <input
      type="submit"
      value="Search"
      className="btn btn-secondary"
      />
  </form>
      <Link to="/create" className="btn btn-primary">
        Create Destinations
      </Link>
    </nav>
  );
}