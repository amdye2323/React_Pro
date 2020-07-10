import React, { Component } from 'react';

import Nav from 'components/MainPage/Nav';
import Foot from 'components/MainPage/Foot';
import SignUp from 'components/Signup/SignUp';

import{
    Container
} from 'semantic-ui-react';

class Signup extends Component{
    render(){
        const { match } = this.props;
        const number = match.params.number;
        return(
            <div>
                <Nav />
                <Container style={{marginTop:'3em'}}>
                 <SignUp number={number} />
                </Container>             
                <Foot />
            </div>
        );
    }
}

export default Signup;