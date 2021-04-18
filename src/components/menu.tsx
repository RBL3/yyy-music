import React, { FC } from 'react'
import { Menu  } from 'antd'

const { Item } = Menu

const YYMenu: FC = () => {
    return (
        <Menu mode="horizontal" style={{ backgroundColor: '#242424', color: '#fff', border: 'none' }}>
            <Item key="mail">
                Navigation One
            </Item>
        </Menu>
    )
}

export default YYMenu