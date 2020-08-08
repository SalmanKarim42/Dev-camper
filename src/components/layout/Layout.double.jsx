import React from "react";

const LayoutDouble = ({ children }) => {
    // console.log(props)
    return (

        <section className="bootcamp mt-5">
            <div className="container">
                <div className="row">
                    {children}
                </div>
            </div>
        </section>
    );
}

export { LayoutDouble }