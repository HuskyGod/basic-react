import React, { Component } from 'react';
import { Menu, Icon, Layout} from 'antd';
import { browserHistory } from 'react-router';
import logo from "../../../resource/img/logo.png"
import list from "../../../resource/list.json"
// import {closeStorage} from '../../../util/http'

export default class Default extends Component {
    state = {
        collapsed: false,
        login: false,
        children_collapsed: false
    }
    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    MenuItem({key}) {
       if (key) {
           browserHistory.push(key)
       }
    }
    componentWillMount() {
        this.login = true;
        console.log(111)
    }
    getRouter() {
        let url = this.props.location.pathname.substr(1);
        if (url.indexOf('/') !== -1) {
            return url.substr(0,url.indexOf('/'))
        }
        return url;
    }
    render() {
        const {Sider,Content,Header} = Layout
        const {children} = this.props;
        return (
            <div>
                <div>
                    <Layout style={{height: '100vh'}} >
                        <Sider
                            collapsible
                            collapsed={this.state.collapsed}
                            onCollapse={this.toggleCollapsed}
                        >
                            <div style={{height: '50px',textAlign: 'center',lineHeight: '50px'}}>
                                <img src={logo} alt="logo" height="30px"/>
                            </div>
                            <Menu
                                defaultSelectedKeys={["/"+this.getRouter()]}
                                mode="inline"
                                theme="dark"
                                inlineCollapsed={this.state.collapsed}
                                onClick={this.MenuItem}
                                style={{position: 'absolute', zIndex: 10}}
                            >
                                {
                                    Object.keys(list)
                                        .map((k,index) => {
                                            return (
                                                 <Menu.Item style={{marginTop: 0}} key={list[k].url} >
                                                     <Icon type={list[k].icon} />
                                                     <span>{list[k].name}</span>
                                                </Menu.Item>
                                            )
                                        })
                                }
                            </Menu>
                        </Sider>
                        <Layout>
                            <Header style={{height: '50px',lineHeight: '50px',padding: '0px 10px'}} >
                                <div onClick={() => {
                                    // closeStorage(browserHistory)
                                }} style={{float: 'right',padding: '0px 10px',fontSize: '25px',transform: 'rotate(90deg)',color: 'white'}}>
                                    <Icon style={{cursor: 'pointer'}} type="poweroff"/>
                                </div>
                            </Header>
                            <Content >
                                <Layout>
                                    <Content >
                                        <div className={'route_box'}  style={{width: this.state.collapsed ? `calc(100% - 80px)` : `calc(100% - ${!list[this.getRouter()].item ? 200 : 400}px)`}}>
                                            {{...children}}
                                        </div>
                                    </Content>
                                </Layout>
                            </Content>
                        </Layout>
                        {/* <Layout>
                            <Header style={{height: '50px',lineHeight: '50px',padding: '0px 10px'}} >
                                <div onClick={() => {
                                    // closeStorage(browserHistory)
                                }} style={{float: 'right',padding: '0px 10px',fontSize: '25px',transform: 'rotate(90deg)',color: 'white'}}>
                                    <Icon style={{cursor: 'pointer'}} type="poweroff"/>
                                </div>
                            </Header>
                            <Content >
                                <Layout>
                                    <Content >
                                        <div className={'route_box'}  style={{width: this.state.collapsed ? `calc(100% - 80px)` : `calc(100% - ${!list[this.getRouter()].item ? 200 : 400}px)`}}>
                                            {{...children}}
                                        </div>
                                    </Content>
                                </Layout>
                            </Content>
                        </Layout> */}
                    </Layout>
                </div>
            </div>
        )
    }
}