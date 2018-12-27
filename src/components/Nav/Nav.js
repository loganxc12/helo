import React, { Component } from "react";
import { withRouter, NavLink } from "react-router-dom";

class Nav extends Component {

     render() {
          return (
               this.props.location.pathname === "/" ? null :
               <div className="nav">
                    <NavLink to="/dashboard">Home</NavLink>
                    <NavLink to="/new">New Post</NavLink>
                    <NavLink to="/">Logout</NavLink>
               </div>
          );
     }

}

export default withRouter(Nav);