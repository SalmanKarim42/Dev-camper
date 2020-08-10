import React from 'react';
import { LayoutSingle } from '../components';
import { withRouter } from 'react-router';

let AddCourse = ({ history, ...props }) => {
    console.log(props);
    return (
        // < !--Add Course -- >
        <LayoutSingle>
            <span
                onClick={() => history.goBack()}
                className="btn btn-link text-secondary my-3"><i className="fas fa-chevron-left"></i> Manage Courses</span>
            <h1 className="mb-2">DevWorks Bootcamp</h1>
            <h3 className="text-primary mb-4">Add Course</h3>
            <form action="manage-bootcamp.html">
                <div className="form-group">
                    <label>Course Title</label>
                    <input
                        type="text"
                        name="title"
                        className="form-control"
                        placeholder="Title"
                    />
                </div>
                <div className="form-group">
                    <label>Duration</label>
                    <input
                        type="number"
                        name="duration"
                        placeholder="Duration"
                        className="form-control"
                    />
                    <small className="form-text text-muted"
                    >Enter number of weeks course lasts</small
                    >
                </div>
                <div className="form-group">
                    <label>Course Tuition</label>
                    <input
                        type="number"
                        name="tuition"
                        placeholder="Tuition"
                        className="form-control"
                    />
                    <small className="form-text text-muted">USD Currency</small>
                </div>
                <div className="form-group">
                    <label>Minimum Skill Required</label>
                    <select name="minimumSkill" className="form-control" defaultValue="beginner">
                        <option value="beginner" >Beginner (Any)</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                    </select>
                </div>
                <div className="form-group">
                    <textarea
                        name="description"
                        rows="5"
                        className="form-control"
                        placeholder="Course description summary"
                        maxLength="500"
                    ></textarea>
                    <small className="form-text text-muted"
                    >No more than 500 characters</small
                    >
                </div>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        name="scholarshipAvailable"
                        id="scholarshipAvailable"
                    />
                    <label className="form-check-label" htmlFor="scholarshipAvailable">
                        Scholarship Available
									</label>
                </div>
                <div className="form-group mt-4">
                    <input
                        type="submit"
                        value="Add Course"
                        className="btn btn-dark btn-block"
                    />
                </div>
            </form>
        </LayoutSingle >
    );
}

AddCourse = withRouter(AddCourse);
export { AddCourse }