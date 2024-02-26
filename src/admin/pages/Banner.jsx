import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Sidebar from '../components/Sidebar';
import BreadCrumb from '../components/BreadCrumb';
import '../Admin.css';
import './Banner.css';
import SwitchBtn from '../components/SwitchBtn';
import TableCommon from '../components/TableCommon';
import DynamicTable from '../components/DynamicTable';

function Banner() {

    const th = [
        { name: '#' },
        { name: 'Image' },
        { name: 'Name' },
        { name: 'Status' },
        { name: 'Action' }
    ];

    const td = [
        [
            '1',
            <img className='img-one' src="../images/img/about-1.jpg" />,
            'Name',
            <SwitchBtn />,
            <div className='d-flex gap-2 justify-content-center'>
                <Link to="/admin/banner/data" className='btn btn-primary'>Edit</Link>
                <button className='btn btn-danger'>Delete</button>
            </div>
        ],
        [
            '2',
            <img className='img-one' src="../images/img/about-1.jpg" />,
            'Name',
            <SwitchBtn />,
            <div className='d-flex gap-2 justify-content-center'>
                <Link to="/admin/banner/data" className='btn btn-primary'>Edit</Link>
                <button className='btn btn-danger'>Delete</button>
            </div>
        ]
    ];

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
                        <TableCommon tblData={<DynamicTable thData={th} tdData={td} />} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner