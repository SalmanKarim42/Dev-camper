import React from 'react';
import { LayoutSingle } from '../components';
import { withRouter } from 'react-router';

let UpdatePassword = ({ history, ...props }) => {
    console.log(props);
    return (
        // < !--Update Password -- >
        <LayoutSingle>
            <h1 className="mb-2">Update Password</h1>
            <form>
                <div className="form-group">
                    <label>Current Password</label>
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Current Password"
                    />
                </div>
                <div className="form-group">
                    <label>New Password</label>
                    <input
                        type="password"
                        name="newPassword"
                        className="form-control"
                        placeholder="New Password"
                    />
                </div>
                <div className="form-group">
                    <label>Confirm New Password</label>
                    <input
                        type="password"
                        name="newPassword2"
                        className="form-control"
                        placeholder="Confirm New Password"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="submit"
                        value="Update Password"
                        className="btn btn-dark btn-block"
                    />
                </div>
            </form>
        </LayoutSingle>
    );
}

UpdatePassword = withRouter(UpdatePassword);
export { UpdatePassword }