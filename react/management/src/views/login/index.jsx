import { Card, Button, Checkbox, Form, Input, Flex } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './index.css';


function Login() {
    const navigate = useNavigate();

    const onFinish = values => {
        console.log('Received values of form: ', values);
        navigate('/layout');
    };

    return (
        <div className="login">
            <Card className='login-container'>
                <img className='login-logo' src={logo} alt="" />
                <Form
                    name="login"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: '请输入用户名!' }]}

                    >
                        <Input prefix={<UserOutlined />} placeholder="用户名" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: '请输入密码!' }]}

                    >
                        <Input prefix={<LockOutlined />} type="password" placeholder="密码" />
                    </Form.Item>
                    <Form.Item>
                        <Flex justify="space-between" align="center">
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>记住我</Checkbox>
                            </Form.Item>
                            <a href="">忘记密码</a>
                        </Flex>
                    </Form.Item>

                    <Form.Item>
                        <Button block type="primary" htmlType="submit" >
                            登 录
                        </Button>
                        或 <a href="">立即注册!</a>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
}

export default Login;