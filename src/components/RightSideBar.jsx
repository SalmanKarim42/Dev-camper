import React from "react";
import {
    NavLink, withRouter, Link
} from "react-router-dom";

let RightSideBar = ({ location: { pathname } }) => {
    // console.log(props)
    return (
        <>
            {/* <!-- Image --> */}
            <img src={require('../assets/img/image_1.jpg')} className="img-thumbnail" alt="" />
            {/* <!-- Rating --> */}
            <h1 className="text-center my-4"><span className="badge badge-secondary badge-success rounded-circle p-3">8.8</span>
               &nbsp; &nbsp;Rating</h1>
            {/* <!-- Buttons --> */}
            <Link to="/reviews" className="btn btn-dark btn-block my-3"><i className="fas fa-comments"></i>  Read Reviews</Link>
            <Link to="/review" className="btn btn-light btn-block my-3"><i className="fas fa-pencil-alt"></i>  Write a Review</Link>
            <a href="#" target="_blank" className="btn btn-secondary btn-block my-3"><i className="fas fa-globe"></i>  Visit Website</a>
            {/* <!-- Map --> */}
            <div id='map' style={{ width: "100%", height: "300px" }}></div>
            {/* <!-- Perks --> */}
            <ul className="list-group list-group-flush mt-4">
                <li className="list-group-item"><i className="fas fa-check text-success"></i> Housing</li>
                <li className="list-group-item"><i className="fas fa-check text-danger"></i> Job Assistance</li>
                <li className="list-group-item"><i className="fas fa-times text-success"></i> Job Guarantee</li>
                <li className="list-group-item"><i className="fas fa-check text-success"></i> Accepts GI Bill</li>
            </ul>
        </>
    )
}
RightSideBar = withRouter(RightSideBar);
export { RightSideBar }