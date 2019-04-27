import React from 'react';
import { Fragment } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import Welcome from './Welcome';
import InputUsername from './InputUsername';
import Jobs from './Jobs';

class App extends React.Component {
    render() {
        return (
            <Fragment>
                <NavBar />
                <div className="row">
                    <div className="col">&nbsp;</div>
                    <div className="col-8" style={{ backgroundColor: 'pink' }}>
                        <Welcome />
                        <InputUsername />
                        <Jobs />
                    </div>
                    <div className="col">&nbsp;</div>
                </div >
                <Footer />
            </Fragment>
        );
    }
}
export default App;