import React from 'react';
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {};
}
const mapDispatchToProps = (dispatch, props) => {
    return {

    };
};

class JobOverview extends React.Component {
    render() {
        return <li key={this.props.key}>Task: {this.props.job.name} -- {this.props.job.status}</li>;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(JobOverview)