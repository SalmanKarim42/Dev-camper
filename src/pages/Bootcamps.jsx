import React from 'react';
import { withRouter } from 'react-router';
import { SideBar, Pagination, BootcampCard, LayoutDouble } from '../components';
const bootcamps = [
    {
        imageUrl: require('../assets/img/image_1.jpg'),
        title: 'Devworks Bootcamp',
        description: 'Web Development, UI/UX, Mobile Development',
        rating: '8.8',
        location: "Boston, MA"
    },
    {
        imageUrl: require('../assets/img/image_2.jpg'),
        title: 'ModernTech Bootcamp',
        description: 'Web Development, UI/UX, Mobile Development',
        rating: '7.5',
        location: "Boston, MA"
    },
    {
        imageUrl: require('../assets/img/image_3.jpg'),
        title: 'Codemasters',
        description: 'Web Development, UI/UX, Mobile Development',
        rating: '9.2',
        location: "Boston, MA"
    },
    {
        imageUrl: require('../assets/img/image_4.jpg'),
        title: 'DevCentral Bootcamp',
        description: 'Web Development, UI/UX, Mobile Development',
        rating: '6.2',
        location: "Boston, MA"
    },
]
let Bootcamps = (props) => {
    console.log(props)
    return (
        // <!-- Latest bootcamps -->
        <LayoutDouble>

            {/* <!-- Sidebar --> */}

            <SideBar />

            {/* <!-- Main col --> */}
            <div className="col-md-8">

                {/* <!-- Bootcamps --> */}
                {
                    bootcamps.map((val, ind) => (<BootcampCard key={ind + 'bootcamp-card'} item={val} />))
                }

                {/* <!-- Pagination --> */}
                <Pagination />
            </div>

        </LayoutDouble>
    );
}

Bootcamps = withRouter(Bootcamps);
export { Bootcamps }