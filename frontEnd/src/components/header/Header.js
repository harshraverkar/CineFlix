import React from "react";
import { Link } from "react-router-dom";
import { Typography, useTheme } from "@mui/material";
import "./Header.css";
import 'bootstrap/dist/css/bootstrap.min.css'
const Header = () => {
  const theme = useTheme();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
      <Link className="navbar-brand" to="/"><span style={{ color: theme.palette.primary.main }} >Cineflix</span></Link>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
        <Link className="nav-link"  to="/movies/popular"  >
          <span>Popular</span></Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/movies/top_rated"><span>Top Rated</span></Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/movies/upcoming"><span>Upcoming</span></Link>
        </li>
      </ul>

      <div className="navbar-nav mr-auto1">
      <li className="nav-item">
        <Link className="nav-link" to="/search"><span>Search</span></Link>
        </li>
      </div>
    </nav>
  );
};

export default Header;
/*
import React from "react";
import { Link } from "react-router-dom";
import { Typography, useTheme } from "@mui/material";
import "./Header.css";

const Header = () => {
  const theme = useTheme();

  return (
    <div className="header">
      <div className="headerLeft">
        <Typography fontWeight="700" fontSize="1.7rem">
          <span style={{ color: theme.palette.primary.main }}>Cine</span>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            flix{" "}
          </Link>
        </Typography>
        <Link to="/movies/popular" style={{ textDecoration: "none" }}>
          <span>Popular</span>
        </Link>
        <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
          <span>Top Rated</span>
        </Link>
        <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
          <span>Upcoming</span>
        </Link>
      </div>

      <div className="headerRight">
        <Link to="/Login" style={{ textDecoration: "none" }}>
          <span>Login</span>
        </Link>
        <Link to="/search" style={{ textDecoration: "none" }}>
          <span>Search</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;

*/