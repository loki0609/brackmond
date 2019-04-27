import React from 'react';
import { connect } from 'react-redux'
import JobOverview from './JobOverview';

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
                return <JobOverview job={job} key={idx} />
            })}
        </ul>;
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Jobs);