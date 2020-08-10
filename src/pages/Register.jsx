import React from 'react';
import { LayoutSingle } from '../components';

export function Register() {
    return (
        // <!-- Register -->
        <LayoutSingle >

            <h1><i className="fas fa-user-plus"></i> Register</h1>
            <p>
                Register to list your bootcamp or rate, review and favorite
                bootcamps
								</p>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Enter full name"
                        required
                    />
                </div>
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
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Enter password"
                        required
                    />
                </div>
                <div className="form-group mb-4">
                    <label htmlFor="password2">Confirm Password</label>
                    <input
                        type="password"
                        name="password2"
                        className="form-control"
                        placeholder="Confirm password"
                        required
                    />
                </div>

                <div className="card card-body mb-3">
                    <h5>User Role</h5>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="role"
                            value="user"
                            id="user-c"
                            defaultChecked="user"
                        // checked
                        />
                        <label htmlFor="user-c" className="form-check-label">
                            Regular User (Browse, Write reviews, etc)
											</label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            id="publisher-c"
                            name="role"
                            value="publisher"
                        />
                        <label htmlFor="publisher-c" className="form-check-label">
                            Bootcamp Publisher
											</label>
                    </div>
                </div>
                <p className="text-danger">
                    * You must be affiliated with the bootcamp in some way in
                    order to add it to DevCamper.
									</p>
                <div className="form-group">
                    <input
                        type="submit"
                        value="Register"
                        className="btn btn-primary btn-block"
                    />
                </div>
            </form>

        </LayoutSingle>
    );
}

