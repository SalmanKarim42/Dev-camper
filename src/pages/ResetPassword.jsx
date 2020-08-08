import React from 'react';
import { LayoutSingle } from '../components';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

let ResetPassword = ({ history }) => {
    return (
        // < !--ResetPassword -- >
        <LayoutSingle>
            <span onClick={() => history.goBack()}>Back to login</span>
            <h1 className="mb-2">Reset Password</h1>
            <p>	Use this form to reset your password using the registered email address.</p>
            <form>
                <div className="form-group">
                    <label>Enter Email</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email address"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="submit"
                        value="Reset Password"
                        className="btn btn-dark btn-block"
                    />
                </div>
            </form>
        </LayoutSingle >
    );
}

ResetPassword = withRouter(ResetPassword)
export { ResetPassword }
