import { NavLink } from "react-router-dom";

const Appbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
      <span className="divider_line"></span>
      <div className="container-fluid">
        <span className="navbar-brand h1 mb-0">SAMEER BLOG</span>
        <div className="navbar-nav flex-row">
          <NavLink
            exact
            activeClassName="menu-active"
            className="nav-link mx-2 menu-link"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            exact
            activeClassName="menu-active"
            className="nav-link mx-2 menu-link"
            to="/create"
          >
            Create
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Appbar;
