import React from 'react';

let show = (id) => {
    const list = document.getElementById(id);
    list.classList.add("dropdown-active");
    document.addEventListener("click", hideEvent);
};

let hide = (id) => {
    console.log("hide");

    const list = document.getElementById(id);
    list.classList.remove("dropdown-active");
    document.removeEventListener("click", hideEvent);
};

let hideEvent = (id) => hide(id);

export const DropDownbutton = ({ Component, id }) => {
    return (
        <div>
            <button className="btn-ico fas fa-ellipsis-v " type="button"
                onClick={() => show(id)}
                title="Menu"
            />
            <Component id={id} />
        </div>
    );
}
