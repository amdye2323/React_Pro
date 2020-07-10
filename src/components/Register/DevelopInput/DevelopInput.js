import React, { Component } from 'react';

import {
    Container,
    Button,
    Form,
    Menu
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class DevelopInput extends Component{
    render(){
        return(
            <div>
                <Container>
                    <Form>
                        <h4 className="ui dividing header">Please Push Your Detail Info</h4>

                        <div className="field">
                            <div className="two fields">
                                <div className="field">
                                    <label>FIRST TEL</label>
                                    <Form.Input icon="phone" iconPosition="left" placeholder="ex) 010-1111-1111" />
                                </div>
                                <div className="field">
                                    <label>SECONDE TEL</label>
                                    <Form.Input icon="phone" iconPosition="left" placeholder="ex) 010-1111-1111" />
                                </div>
                            </div>
                        </div>

                        <div className="field">
                            <label>Company Registration Number</label>
                            <div className="field">
                                <Form.Input icon="building outline" iconPosition="left" type="text" name="text" placeholder="Please enter only the number"/>
                            </div>
                        </div>

                        <div className="fields">
                            <div className="seven wide field">
                                <label>Company Code</label>
                                <div className="ui compact menu">
                                    <div className="ui simple dropdown item">
                                        Select Your Company
                                        <i className="dropdown icon"></i>
                                        <Menu>
                                            <Menu.Item>Social Bean</Menu.Item>
                                            <Menu.Item>Bang GuSuck</Menu.Item>
                                            <Menu.Item>M_Skin</Menu.Item>
                                            <Menu.Item>ReturnBox</Menu.Item>
                                        </Menu>
                                    </div>
                                </div>
                            </div>
                            <div className="seven wide field">
                                <label>Company Kinds</label>
                                <div className="ui compact menu">
                                    <div className="ui simple dropdown item">
                                        Select Your Company Kinds
                                        <i className="dropdown icon"></i>
                                        <Menu>
                                            <Menu.Item>Ecommerce</Menu.Item>
                                            <Menu.Item>Normal Company</Menu.Item>
                                        </Menu>
                                    </div>
                                </div>
                            </div>
                            <div className="seven wide field">
                                <label>User Auth</label>
                                <select className="ui dropdown">
                                    <option>None</option>
                                    <option>Employee</option>
                                    <option>Company Manager</option>
                                    <option>Returnbox</option>
                                </select>
                            </div>
                        </div>
                        <div className="field" style={{marginTop:'2em',textAlign:'center'}}>
                            <Button><Link to="/signup/1" color='teal'>Prev Steps  ...</Link></Button>
                            <Button><Link to="/signup/3" color='teal'>Next Steps  ...</Link></Button>
                        </div>
                    </Form>    
                </Container>
            </div>
            
        );
    };
};

export default DevelopInput;