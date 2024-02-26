import React from 'react';
import './AddData.css';

const AddData = (props) => {
    return (
        <tr>
            <td ><span className='Lavel'>{props.Label} :</span></td>
            <td ><input type={props.inputType} placeholder={props.Placeholder} /></td>
        </tr>
    )
}

export default AddData
