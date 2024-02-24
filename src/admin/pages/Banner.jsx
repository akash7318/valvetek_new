import React from 'react';
import Nav from '../components/Nav';
import Sidebar from '../components/Sidebar';
import '../Admin.css';

function Banner() {
    return (
        <section className='admin_container'>
            <Nav />
            <div className='sidebar_with_content'>
                <div className='sidebar_box'>
                    <Sidebar />
                </div>
                <div className='content_box'>
                    Banner
                </div>
            </div>
        </section>
    )
}

export default Banner