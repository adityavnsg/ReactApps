import React from 'react';
import { connect } from 'react-redux';

function Loading(props) {
    return (
        props.loading?<div className="loader center">
            <i className="fa fa-cog fa-spin" />
        </div>:null
    );
}

const mapStateToProps = state => {
    return {
        loading: state.loading
    }
}

export default connect(mapStateToProps, null)(Loading);