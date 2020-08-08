import React from "react";
import {
    NavLink, withRouter, Link
} from "react-router-dom";

let NavBar = ({ location: { pathname } }) => {
    // console.log(props)
    return (

        // < !--Navbar -- >
        <nav className={`navbar navbar-expand-md navbar-dark bg-primary ${pathname === "/" ? 'fixed-top' : ''}`}>
            <div className="container">
                <NavLink className="navbar-brand" exact activeClassName="active" to="/">
                    <i className="fas fa-laptop-code"></i> DevCamper</NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-toggle="dropdown"
                            >
                                <i className="fas fa-user"></i> Account
							</a>
                            <div className="dropdown-menu">
                                <Link className="dropdown-item" to="/bootcamp/id">
                                    Manage Bootcamp
                                    </Link>
                                <Link className="dropdown-item" to="/myreviews">Manage Reviews</Link>
                                <Link className="dropdown-item" to="/me">Manage Account</Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" to="/login"><i className="fas fa-sign-out-alt"></i> Logout</Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login" activeClassName="active">
                                <i className="fas fa-sign-in-alt"></i> Login
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/register" activeClassName="active">
                                <i className="fas fa-user-plus"></i> Register
                            </NavLink>
                        </li>
                        <li className="nav-item d-none d-sm-block">
                            <span className="nav-link" >|</span>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/bootcamps" exact activeClassName="active">
                                Browse Bootcamps
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
NavBar = withRouter(NavBar);
export { NavBar }