import React from "react";
import './layout.css';

function Layout(props) {
  return (
    <div className="Layout">
      {props.children}
    </div>
  );
}

export default Layout;
