import React from 'react'
import { Link } from 'react-router-dom'

function BreadCrumb(props) {
    return (
        <div className='breadCrumb d-flex align-items-center justify-content-between'>
            <span className='fs-5'>{props.pageName}</span>
            <Link to={props.link} className='btn btn-primary'>{props.btnName}</Link>
        </div>
    )
}

export default BreadCrumb