import React from "react";

const LayoutSingle = ({ children }) => {
    // console.log(props)
    return (
        <section className="form mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <div className="card bg-white p-4 mb-4">
                            <div className="card-body">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export { LayoutSingle }