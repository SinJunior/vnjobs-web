import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {

    };
}

function mapDispatchToProps(dispatch) {
    return {

    };
}

class index extends Component {
    render() {
        return (
            <div>
                Home page
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(index);