import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { BiCameraMovie, BiSearch } from "react-icons/bi";

import "./Navbar.css";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`);
    setSearch("");
    
  };

  return (
    <div>
      <nav id="navbar">
        <h2>
          <Link to={"/"}>
            <BiCameraMovie /> MoviesLib
          </Link>
        </h2>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Busque um filme"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit">
            <BiSearch />
          </button>
        </form>
      </nav>
    </div>
  );
};

export default Navbar;
