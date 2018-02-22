import React, { Component } from 'react';
import { Avatar, Form, Input, Icon, Button } from 'antd';
import { browserHistory } from 'react-router';
import { setLocalStorage, post } from "../../util/http";
export default class Default extends Component {
    constructor(props) {
        super(props);
    }
    emitEmpty = (type) => {
        
    }
    onChange = (e,type) => {
        
    }
    submit= () => {

    }
    render() {
        const { user_name,pwd } = this.state;
        return (
            <div style={{background: 'linear-gradient(180deg,#68eacc 0,#497be8)', position: 'fixed',  width: "100%", height: "100%"}}>
                <div style={{
                    width: 350,
                    position: 'absolute',
                    background: 'white',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%,-50%)',
                    border: '1px solid #eeee',
                    borderRadius: '5%',
                    animation: 'intro .7s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards'
                }}>
                    <div style={{textAlign: 'center',margin: '20px auto',marginBottom: '15px'}}>
                        <Avatar
                            size="large"
                            icon="user"
                            style={{
                                width: '80px',
                                height: '80px',
                                lineHeight: '80px',
                                borderRadius: '50%',
                                fontSize: '60px'
                            }}
                        />
                        <div>
                            <h2 style={{color: 'gray',fontWeight: 'blod'}}>以太科技</h2>
                        </div>
                    </div>
                    <div style={{width: '80%',margin: '0px auto',paddingTop: '20px',borderTop: '1px solid #d9d9d9'}}>
                        <Form>
                            <Form.Item>
                                <Input
                                    placeholder="请输入您的用户名"
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    suffix={user_name ?
                                        <Icon type="close-circle" onClick={this.emitEmpty.bind(this,'user_name')} />
                                     : null}
                                    value={user_name}
                                    onChange={(e) => {
                                        this.onChange(e,'user_name');
                                    }}
                                    ref="user_name"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Input
                                    placeholder="请输入您的密码"
                                    prefix={<Icon type="edit" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    suffix={pwd ?
                                        <Icon type="close-circle" onClick={this.emitEmpty.bind(this,'pwd')} />
                                        : null}
                                    value={pwd}
                                    onChange={(e) => {
                                        this.onChange(e,'pwd');
                                    }}
                                    ref="pwd"
                                />
                            </Form.Item>
                        </Form>
                        <div style={{textAlign: 'center',paddingBottom: 25}}>
                            <Button style={{width: '100%',fontSize: '16px'}} size="large" onClick={this.submit} type="primary" loading={this.state.loading} >
                                登录
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount() {

    }
}