import "../styles/navbar.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  // In a real app, you'd ideally get this from an AuthContext
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    // navigate(0) reloads the current route to clear state,
    // or navigate("/") sends them home.
    navigate("/");
    window.location.reload(); // Ensures the 'token' check runs again
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo">
          RentMate
        </Link>

        <div className="nav-links">
          <Link to="/listings">Listings</Link>

          {token ? (
            <>
              <Link to="/create">Create</Link>
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
