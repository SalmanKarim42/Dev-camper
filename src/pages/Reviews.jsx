import React from 'react';
import { withRouter } from 'react-router';
import { ReviewCard, LayoutDouble } from '../components';
import { Link } from 'react-router-dom';
const reviews = [
    {

        title: 'Fantastic Bootcamp',
        description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Commodi similique mollitia, praesentium, animi harum officia
        dolores corporis ex tempore consequuntur dolorem ullam dolorum
        magnam corrupti quaerat tempora repudiandae! Similique,
        molestiae. Iste, blanditiis recusandae unde tenetur eius
        exercitationem rerum a fuga.`,

        rating: '10',
        writtenBy: 'Kevin Smith'
    },

    {

        title: 'Learned a Lot',
        description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Commodi similique mollitia, praesentium, animi harum officia
        dolores corporis ex tempore consequuntur dolorem ullam dolorum
        magnam corrupti quaerat tempora repudiandae! Similique,
        molestiae. Iste, blanditiis recusandae unde tenetur eius
        exercitationem rerum a fuga.`,
        rating: '9',
        writtenBy: 'Jill Samson'
    },

]
let Reviews = ({ history }) => {
    return (
        <LayoutDouble>

            {/* <!-- Main col --> */}
            <div className="col-md-8">
                <span
                    onClick={() => history.goBack()}
                    // target="_blank"
                    className="btn btn-secondary my-3"
                ><i className="fas fa-chevron-left"></i> Bootcamp Info</span>
                <h1 className="mb-4">DevWorks Bootcamp Reviews</h1>
                {/* <!-- Reviews --> */}
                {
                    reviews.map((val, ind) => (<ReviewCard item={val} key={ind + 'review-card'} />))
                }

            </div>
            {/* <!-- Sidebar --> */}
            <div className="col-md-4">
                {/* <!-- Rating --> */}
                <h1 className="text-center my-4">
                    <span
                        className="badge badge-secondary badge-success rounded-circle p-3"
                    >8.8</span
                    >
                        Rating
                    </h1>
                {/* <!-- Buttons --> */}
                <Link to="review" className="btn btn-primary btn-block my-3"
                ><i className="fas fa-pencil-alt"></i> Review This Bootcamp</Link>
            </div>
        </LayoutDouble>
    );
}

Reviews = withRouter(Reviews);
export { Reviews }