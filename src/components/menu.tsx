import React, { FC, ReactElement } from 'react'
import { Menu  } from 'antd'

const { Item } = Menu

export interface Coumn { // ReactElement
    id: string | number;
    content: string | ReactElement;
    onClick?: () => void;
}

export type Coumns = {
    coumns: Coumn[]
}

const YYMenu: FC<Coumns> = ({coumns}) => {
    return (
        <Menu mode="horizontal" style={{ backgroundColor: '#242424', color: '#fff', border: 'none' }}>
            {
                coumns.map((item) => {
                    if(item.onClick) {
                        return (
                            <Item key={item.id} onClick={item.onClick}>
                                {item.content}
                            </Item>
                        )
                    }
                    return (
                        <Item key={item.id}>
                            {item.content}
                        </Item>
                    )
                })
            }
        </Menu>
    )
}

export default YYMenu