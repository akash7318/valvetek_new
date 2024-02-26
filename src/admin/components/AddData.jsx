import React from 'react';
import './AddData.css';

const AddData = (props) => {
    return (
        <div className='add_box'>
            <div className='Label-box' ><span className='Lavel'>{props.Label} :</span></div>
            <div className='Input-box'><input type={props.inputType} placeholder={props.Placeholder} /></div>
        </div>
    )
}

export default AddData
