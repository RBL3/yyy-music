import { FC } from 'react'
import { Row, Col } from 'antd'
import YYMenu from '@/components/menu'
import Search from './search'
import User from './user'
import { menu } from './config' 
import logo from '@/static/logo.png'
import './index.less'

const Header: FC = () => {
    return (
        <Row justify='center' align='middle' className='header'>
            <Col span={12} style={{display: 'flex', alignItems: 'center'}}>
                <div className='logo'>
                    <img src={logo} alt="" />
                </div>
                <YYMenu coumns={menu} />
                <Search />
                <User />
            </Col>
        </Row>
    )
}

export default Header