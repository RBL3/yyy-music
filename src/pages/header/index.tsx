import React, { FC } from 'react'
import { Row, Col } from 'antd'
import YYMenu from '@/components/menu'

const Header: FC = () => {
    return (
        <Row justify='center' align='middle' style={{ backgroundColor: '#242424', height: '69px' }}>
            <Col span={12}>
                <YYMenu />
            </Col>
        </Row>
    )
}

export default Header