import React from 'react';
import Nav from '../components/Nav';
import Sidebar from '../components/Sidebar';
import BreadCrumb from '../components/BreadCrumb';
import '../Admin.css';
import './Banner.css';
import TableCommon from '../components/TableCommon';

function Banner() {
    return (
        <section className='admin_container'>
            <Nav />
            <div className='sidebar_with_content'>
                <div className='sidebar_box'>
                    <Sidebar />
                </div>
                <div className='content_box'>
                    <div className='content_container'>
                        <BreadCrumb pageName="Banner" link="/admin/add-banner" btnName="Add Banner" />
                        <TableCommon></TableCommon>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner