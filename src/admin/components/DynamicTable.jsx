import React from 'react'

function EachData(props) {
    return (
        <>
            <thead>
                <tr>
                    {
                        props.thData.map((value, index) =>
                            <th key={index}>{value.name}</th>
                        )
                    }
                </tr>
            </thead>
            <tbody>
                {
                    props.tdData.map((value, index) =>
                        <tr key={index}>
                            {
                                value.map((item, key) =>
                                    <td key={key}>{item}</td>
                                )
                            }
                        </tr>
                    )
                }
            </tbody>
        </>
    )
}

export default EachData