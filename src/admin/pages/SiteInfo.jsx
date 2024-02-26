import React from 'react'
import Nav from '../components/Nav'
import Sidebar from '../components/Sidebar'
import BreadCrumb from '../components/BreadCrumb'

function SiteInfo() {
    return (
        <section className='admin_container'>
            <Nav />
            <div className='sidebar_with_content'>
                <div className='sidebar_box'>
                    <Sidebar />
                </div>
                <div className='content_box'>
                    <div className='shadow w-100 bg-white rounded p-4'>
                        <BreadCrumb pageName="Site Information" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SiteInfo