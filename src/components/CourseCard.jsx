import React from "react";
import {
    NavLink, withRouter
} from "react-router-dom";
import { CardLayout } from "./layout";

let CourseCard = ({ item: { title, duration, description, cost, skill, scholarship } }) => {
    // console.log(props)
    return (
        <CardLayout title={title}>
            <h5 className="card-title">Duration: {duration}</h5>
            <p className="card-text">{description}</p>
            <ul className="list-group mb-3">
                <li className="list-group-item">Cost: {cost}</li>
                <li className="list-group-item">Skill Required: {skill}</li>
                <li className="list-group-item">Scholarship Available: <i className={`fas ${scholarship ? 'fa-check text-success' : 'fa-times text-danger'} `}></i> </li>
            </ul>
        </CardLayout>
    )
}
// CourseCard = withRouter(CourseCard);
export { CourseCard }
