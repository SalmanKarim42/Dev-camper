import React from 'react';
import { LayoutSingle } from '../components';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

let ManageAccount = ({ history, ...props }) => {
    console.log(props);
    return (
        // < !--Manage Account -- >
        <LayoutSingle>
            <h1 className="mb-2">Manage Account</h1>
            <form>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        name="title"
                        className="form-control"
                        placeholder="Name"
                        value="John Doe"
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        value="jdoe@gmail.com"
                    />
                </div>
                <div className="form-group">
                    <div className="row">
                        <div className="col-md-6">
                            <input
                                type="submit"
                                value="Save"
                                className="btn btn-success btn-block"
                            />
                        </div>
                        <div className="col-md-6">
                            <Link
                                to="/me/password"
                                className="btn btn-secondary btn-block"
                            >Update Password</Link>
                        </div>
                    </div>
                </div>
            </form>

        </LayoutSingle>
    );
}

ManageAccount = withRouter(ManageAccount);
export { ManageAccount }