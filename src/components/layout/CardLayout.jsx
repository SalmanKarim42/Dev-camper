import React from "react";

const CardLayout = ({ children, color = "bg-primary", title }) => {
    // console.log(props)
    return (
        <div className="card mb-3">
            <h5 className={`card-header ${color}  text-white`}>{title}</h5>
            <div className="card-body">

                {children}
            </div>
        </div>
    );
}

export { CardLayout }