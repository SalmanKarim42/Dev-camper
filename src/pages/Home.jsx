import React from 'react';
import { withRouter } from 'react-router';

let Home = ({ history }) => {
    const onSubmit = (e) => {
        e.preventDefault();
        // console.log(history)
        history.push('bootcamps', {
            params: {
                miles: '20',
                zipcode: '22022'
            }
        })
    }
    return (
        // < !--Showcase -- >
        <section className="showcase">
            <div className="dark-overlay">
                <div className="showcase-inner container">
                    <h1 className="display-4">Find a Code Bootcamp</h1>
                    <p className="lead">
                        Find, rate and read reviews on coding bootcamps
					</p>
                    <form onSubmit={onSubmit}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="miles"
                                        placeholder="Miles From"
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="zipcode"
                                        placeholder="Enter Zipcode"
                                    />
                                </div>
                            </div>
                        </div>
                        <input
                            type="submit"
                            value="Find Bootcamps"
                            className="btn btn-primary btn-block"
                        />
                    </form>
                </div>
            </div>
        </section>
    );
}
Home = withRouter(Home);
export { Home };
