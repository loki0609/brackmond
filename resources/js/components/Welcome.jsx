import React from 'react';
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        name: state.username,
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {

    };
};

class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name} and {this.props.names}</h1>;
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Welcome);