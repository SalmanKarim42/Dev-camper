import React from 'react';
import { LayoutSingle } from '../components';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

let ManageReview = ({ history }) => {
    return (
        // < !--Manage Review -- >
        <LayoutSingle>
            <h1 className="mb-4">Manage Reviews</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Bootcamp</th>
                        <th scope="col">Rating</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>DevWorks Bootcamp</td>
                        <td>10</td>
                        <td>
                            <Link to={{
                                pathname: "/review",
                                state: { fromDashboard: true }
                            }} className="btn btn-secondary"><i className="fas fa-pencil-alt"></i></Link>
                            <button className="btn btn-danger">
                                <i className="fas fa-times"></i>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>Codemasters</td>
                        <td>7</td>
                        <td>
                            <Link to={{
                                pathname: "/review",
                                state: { fromDashboard: true }
                            }} className="btn btn-secondary"><i className="fas fa-pencil-alt"></i></Link>
                            <button className="btn btn-danger">
                                <i className="fas fa-times"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </LayoutSingle>
    );
}

ManageReview = withRouter(ManageReview);
export { ManageReview }