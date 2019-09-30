import React from 'react';

export const ItemDropDown = ({ id }) => {
    return (
        <div id={id} className="js-drop-down">
            <div>User name</div>
            <button className="logout" >
                Logout
          </button>
        </div>
    );
};