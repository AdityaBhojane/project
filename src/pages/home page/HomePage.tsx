import React, { useState } from 'react';
import logo from '../../assets/brandLogo.webp'
import {
    AppstoreOutlined,
    MailOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    SettingOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';


const { Header, Sider, Content } = Layout;

const HomePage: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: {  borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="w-[80%] bg-slate-700 h-[3vw] relative py-3 my-2 mx-2 rounded-xl">
                    <img className='w-[4vw] absolute top-1/2 -translate-y-[40%]' src={logo} alt="logo" />
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    className='h-screen'
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <UserOutlined />,
                            label: 'nav 1',
                        },
                        {
                            key: '2',
                            icon: <VideoCameraOutlined />,
                            label: 'nav 2',
                        },
                        {
                            key: '3',
                            icon: <UploadOutlined />,
                            label: 'nav 3',
                        },
                        {
                            key: 'sub1',
                            label: 'Navigation One',
                            icon: <MailOutlined />,
                            children: [
                                { key: '1', label: 'Option 1' },
                                { key: '2', label: 'Option 2' },
                                { key: '3', label: 'Option 3' },
                                { key: '4', label: 'Option 4' },
                            ],
                        },
                        {
                            key: 'sub2',
                            label: 'Navigation Two',
                            icon: <AppstoreOutlined />,
                            children: [
                                { key: '5', label: 'Option 5' },
                                { key: '6', label: 'Option 6' },
                                {
                                    key: 'sub3',
                                    label: 'Submenu',
                                    children: [
                                        { key: '7', label: 'Option 7' },
                                        { key: '8', label: 'Option 8' },
                                    ],
                                },
                            ],
                        },
                        {
                            key: 'sub4',
                            label: 'Navigation Three',
                            icon: <SettingOutlined />,
                            children: [
                                { key: '9', label: 'Option 9' },
                                { key: '10', label: 'Option 10' },
                                { key: '11', label: 'Option 11' },
                                { key: '12', label: 'Option 12' },
                            ],
                        },
                    ]}
                />
            </Sider>
            <Layout className='bg-[#272727]'>
                <Header className='bg-[#272727]' style={{ padding: 0 }}>
                    <Button
                        type="text"
                        icon={collapsed ? 
                        <MenuUnfoldOutlined className='text-white  hover:text-yellow-500 ' /> 
                        : 
                        <MenuFoldOutlined className='text-white  hover:text-yellow-500 ' />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        borderRadius: borderRadiusLG,
                    }}
                    className='bg-[#0d1f3d] text-white'
                >
                    Content
                </Content>
            </Layout>
        </Layout>
    );
};

export default HomePage;