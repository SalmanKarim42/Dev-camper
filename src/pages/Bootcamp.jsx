import React from 'react';
import { withRouter } from 'react-router';
import { RightSideBar, CourseCard, LayoutDouble } from '../components';
const courses = [
    {

        title: 'Front End Web Development',
        description: 'This course will provide you with all of the essentials to become a successful frontend web developer. You will learn to master HTML, CSS and front end JavaScript, along with tools like Git, VSCode and front end frameworks like Vue',
        duration: '8 Weeks',
        cost: '$8,000 USD',
        skill: 'Beginner',
        scholarship: true
    },
    {

        title: 'Full Stack Web Development',
        description: 'In this course you will learn full stack web development, first learning all about the frontend with HTML/CSS/JS/Vue and then the backend with Node.js/Express/MongoDB',
        duration: '12 Weeks',
        cost: '$10,000 USD',
        skill: 'Intermediate',
        scholarship: false
    },
]
let Bootcamp = () => {
    return (
        <LayoutDouble>

            {/* <!-- Main col --> */}
            <div className="col-md-8">
                <h1>DevWorks Bootcamp</h1>
                {/* <!-- Description --> */}
                <p>Devworks is a full stack JavaScript Bootcamp located in the heart of Boston that focuses on the technologies you need to get a high paying job as a web developer</p>
                {/* <!-- Avg cost --> */}
                <p className="lead mb-4">Average Course Cost: <span className="text-primary">$10,000</span></p>
                {/* <!-- Courses --> */}
                {
                    courses.map((val, ind) => (<CourseCard item={val} key={ind + 'course-card'} />))
                }

            </div>
            {/* <!-- Sidebar --> */}
            <div className="col-md-4">
                <RightSideBar />
            </div>
        </LayoutDouble>

    );
}

Bootcamp = withRouter(Bootcamp);
export { Bootcamp }