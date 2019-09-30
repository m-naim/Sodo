import React from 'react';

let logOut = () => {
    console.log("out");

    localStorage.removeItem('jwt');
    window.location.assign("/");
};

export const NavDropDown = ({ id }) => {
    return (
        <div id={id} className="js-drop-down">
            <div>User name</div>
            <button className="logout" onClick={() => logOut()} >
                Logout
          </button>
        </div>
    );
};