import React from 'react';
import Nav from '../components/Nav';
import Sidebar from '../components/Sidebar';
import '../Admin.css';
import Box from '../components/Box';
import WebIcon from '@mui/icons-material/Web';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';

function Dashboard() {

    const boxData = [
        {
            'title': 'Site Info',
            'heading': 'Information',
            'icon': <WebIcon className='fs-1' />,
            'link': '/admin/site-info'
        },
        {
            'title': 'Banner',
            'heading': '3',
            'icon': <ViewCarouselIcon className='fs-1' />,
            'link': '/admin/banner'
        }
    ];

    return (
        <section className='admin_container'>
            <Nav />
            <div className='sidebar_with_content'>
                <div className='sidebar_box'>
                    <Sidebar />
                </div>
                <div className='content_box'>
                    <div className='row'>
                        {
                            boxData.map((value, index) =>
                                <Box
                                    key={index}
                                    title={value.title}
                                    heading={value.heading}
                                    icon={value.icon}
                                    link={value.link}
                                />
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Dashboard