import React from 'react';
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        jobs: state.jobs,
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {

    };
};

class Jobs extends React.Component {
    render() {
        return <ul>
            {this.props.jobs.map((job, idx) => {
                return <li key={idx}>Task: {job.task} -- {job.status}</li>
            })}
        </ul>;
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Jobs);