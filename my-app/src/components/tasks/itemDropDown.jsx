import React from 'react';

export const ItemDropDown = ({ id, active }) => {
    return (
        <div
            id={id}
            className={(active) ? "js-drop-down dropdown-active" : "js-drop-down "}
        >
            <div>User name</div>
            <button className="logout" >
                Logout
          </button>
        </div>
    );
};