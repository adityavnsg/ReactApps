import React from 'react';
import { connect } from 'react-redux';

const Header = (props)=>{
    return(
        <div style={{float:'right', marginRight: '10%'}}>
            {'Cart Bag:'+ props.quantity}
        </div>
    )
}
const mapStateToProps = state => {
    return{
        quantity : state.cartQuantity
    }
}

export default connect(mapStateToProps, null)(Header)