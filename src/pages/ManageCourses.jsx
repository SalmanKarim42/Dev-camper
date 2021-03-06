import React from 'react';
import { LayoutSingle } from '../components';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

let ManageCourses = ({ history }) => {

    const isNull = true;
    return (
        <LayoutSingle>
            {
                isNull ?
                    <>
                        <Link
                            to="/bootcamp/id"
                            className="btn btn-link text-secondary my-3"><i className="fas fa-chevron-left"></i> Manage Bootcamp</Link>
                        <h1 className="mb-4">Manage Courses</h1>
                        <div className="card mb-3">
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src={require('../assets/img/image_1.jpg')} className="card-img" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            <Link to="/bootcamps/id">Devworks Bootcamp
													<span className="float-right badge badge-success">4.9</span></Link>
                                        </h5>
                                        <span className="badge badge-dark mb-2">Boston, MA</span>
                                        <p className="card-text">
                                            Web Development, UI/UX, Mobile Development
											</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Link to="/addcourse" className="btn btn-primary btn-block mb-4">Add Bootcamp Course</Link>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Title</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Front End Web Development</td>
                                    <td>
                                        <Link to={{
                                            pathname: "/addcourse",
                                            state: {
                                                edit: true
                                            }
                                        }} className="btn btn-secondary"><i className="fas fa-pencil-alt"></i></Link>
                                        <button className="btn btn-danger">
                                            <i className="fas fa-times"></i>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Full Stack Web Development</td>
                                    <td>
                                        <Link to={{
                                            pathname: "/addcourse",
                                            state: {
                                                edit: true
                                            }
                                        }} className="btn btn-secondary"><i className="fas fa-pencil-alt"></i></Link>
                                        <button className="btn btn-danger">
                                            <i className="fas fa-times"></i>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </> :
                    <>
                        <h1 class="mb-2">Manage Courses</h1>
                        <p class="lead">
                            You have not yet added any courses
							</p>
                        <Link to="/addcourse" class="btn btn-primary btn-block">Add Your first course</Link >
                    </>
            }
        </LayoutSingle>
    );
}

ManageCourses = withRouter(ManageCourses);
export { ManageCourses }