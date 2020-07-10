import React, { Component } from 'react';

import {
    Container,
    Input,
    Form,
    Button,
    Checkbox
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class PersonalInput extends Component{
    render(){
        return(
            <div>
            <Container>
                <Form>
                    <h4 className="ui dividing header">Please Push Your Personal Account</h4>
                    <div className="field">
                        <label>ACCOUNT ID</label>
                        <div className="fields">
                            <div className="twelve wide field">
                                <Input iconPosition="left" icon="user" type="text" name="id" placeholder="Your Id...."/>
                            </div>
                            <div className="field">
                                <Button>Check Button</Button>
                            </div>
                        </div>
                    </div>

                    <div className="field">
                        <div className="two fields">
                            <div className="field">
                                <label>PASSWORD</label>
                                <Form.Input icon="lock" iconPosition="left" type="password" name="password" placeholder="Please Your Password Push..."/>
                            </div>
                            <div className="field">
                                <label>PASSWORD Check</label>
                                <Form.Input icon="check" iconPosition="left" type="password" name="passwordChk" placeholder="Check your Password...."/>
                            </div>
                        </div>
                    </div>

                    <div className="field">
                        <label>E-MAIL</label>
                        <div className="field">
                            <Form.Input icon="envelope outline" iconPosition="left" type="email" name="email" placeholder=" (Ex...@Naver,@Google,@Daum)"/>
                            <div className="required inline field">
                                <Checkbox>
                                <Input type="checkbox" tabIndex="0" className="hidden"/>
                                </Checkbox>
                                <label>I agree to the terms and conditions</label>
                            </div>
                        </div>
                    </div>
                    
                    <div className="field" style={{marginTop:'2em',textAlign:'center'}}>
                        <Button><Link to="/signup/2" color='teal'>Next Steps...</Link></Button>
                    </div>
                </Form>    
            </Container>    
            </div>
        );
    };
};

export default PersonalInput;