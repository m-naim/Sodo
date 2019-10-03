import React from 'react';

let logOut = () => {
    console.log("out");

    localStorage.removeItem('jwt');
    window.location.assign("/");
};

export const NavDropDown = ({ id, active }) => {
    return (
        <div
            id={id}
            className={(active) ? "js-drop-down dropdown-active" : "js-drop-down "}
        >
            <div>User name</div>
            <button className="logout" onClick={() => logOut()} >
                Logout
          </button>
        </div>
    );
};