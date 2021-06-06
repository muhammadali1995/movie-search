import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div className="container-fluid px-0">
      <nav className="navbar navbar-light bg-light px-5">
        <a className="navbar-brand" href="/">
          Movie Search
        </a>
        <NavLink to="/favorites" className="text-warning text-decoration-none">
          <i className="bi bi-heart-fill"></i> Favorites
        </NavLink>
      </nav>
    </div>
  );
};
