import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import logo from './imgs/logo.png'
import './css/login.less'
const {Item} = Form
class Login extends Component {
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div id='login'>
                <div className='header'>
                    <img src={logo} alt="头像" />
                    <h1>商品管理系统</h1>
                </div>
                <div className='content'>
                    <h1>用户登录</h1>

                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Item>
                            {getFieldDecorator('username', {
                                rules: [
                                    { required: true, message: '必须输入用户名!' },
                                    { max: 12, message: '用户名不能超过12位!' },
                                    { min: 4, message: '用户名不能少于4位!' },
                                    { pattern: /^\w+$/, message: '用户名必须由数字英文下划线组成!' },

                                ],
                            })(
                                <Input
                                    prefix={<Icon type="github" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="用户名"
                                />,
                            )}
                        </Item>
                        <Item>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: '请输入你的密码!' },
                                { max: 16, message: '密码不能超过16位!' },
                                    { min: 4, message: '用户名不能少于4位!' },
                                    { pattern: /^\w+$/, message: '密码必须由数字英文下划线组成!' },

                            ],
                            })(
                                <Input
                                    prefix={<Icon type="android" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="密码框"
                                />,
                            )}
                        </Item>
                        <Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录按钮
                            </Button>
                           
                        </Item>
                    </Form>

                </div>
            </div>
        )
    }
}
export default Form.create({ name: 'normal_login' })(Login);