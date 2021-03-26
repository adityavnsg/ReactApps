import React from 'react';

const TableHeaderComponent =(props)=>{
    return(
        <React.Fragment>
            <tr>
                <th>ID</th>
                <th>Email</th>
                <th>Name</th>
                <th>Avatar</th>
            </tr>
        </React.Fragment>
    )
}

export default TableHeaderComponent;