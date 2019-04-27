import React from 'react';
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        name: state.username,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        dispatchNameChange: (name) => {
            dispatch({
                type: 'SET_USERNAME',
                name: name
            });
        }
    };
};

class InputUsername extends React.Component {
    constructor(props) {
        super(props);
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(event) {
        let elem = event.target,
            name = elem.value;
        this.props.dispatchNameChange(name);
    }
    render() {
        return (
            <div>
                Enter a name: <input type="text" onChange={this.handleOnChange} value={this.props.name} />
            </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(InputUsername);