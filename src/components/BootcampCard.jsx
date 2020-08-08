import React from "react";
import {
    NavLink, withRouter, Link
} from "react-router-dom";

let BootcampCard = ({ item: { imageUrl, title, description, rating, location } }) => {
    // console.log(props)
    return (
        <div className="card mb-3">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={imageUrl} className="card-img" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">
                            <Link to="/bootcamps/id">
                                {title}
                                <span className="float-right badge badge-success">{rating}</span></Link>
                        </h5>
                        <span className="badge badge-dark mb-2">{location}</span>
                        <p className="card-text">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}
// BootcampCard = withRouter(BootcampCard);
export { BootcampCard }
