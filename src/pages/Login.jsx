import React from 'react';
import { LayoutSingle } from '../components';
import { Link } from 'react-router-dom';

export function Login() {
    // < !--Login -- >
    return (
        <LayoutSingle>

            <h1><i className="fas fa-sign-in-alt"></i> Login</h1>
            <p>
                Log in to list your bootcamp or rate, review and favorite
                bootcamps
								</p>
            <form>
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Enter email"
                        required
                    />
                </div>
                <div className="form-group mb-4">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Enter password"
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="submit"
                        value="Login"
                        className="btn btn-primary btn-block"
                    />
                </div>
            </form>
            <p>	Forgot Password? <Link to="/resetPassword">Reset Password</Link></p>
        </LayoutSingle>
    );
}

