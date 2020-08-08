import React from "react";

import { CardLayout } from "./layout";

let ReviewCard = ({ item: { title, rating, description, wirttenBy } }) => {
    // console.log(props)
    return (
        <CardLayout title={title} color="bg-dark">

            <h5 className="card-title">
                Rating: <span className="text-success">{rating}</span>
            </h5>
            <p className="card-text">
                {description}

            </p>
            <p className="text-muted">Writtern By {wirttenBy}</p>

        </CardLayout>
    )
}
// ReviewCard = withRouter(ReviewCard);
export { ReviewCard }
