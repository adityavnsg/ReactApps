import React from 'react';

const TabelComponent = (props)=>{
    return(
        <React.Fragment>
            <tr>
                <td>{props.item.id}</td>
                <td><a href='#'>{props.item.email}</a></td>
                <td>{props.item.first_name + props.item.last_name}</td>
                <td><a href='#'>{props.item.avatar}</a></td>
            </tr>
        </React.Fragment>
    )
}

export default TabelComponent;