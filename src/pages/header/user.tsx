import { FC, useState, useEffect } from 'react'
import { Avatar, Modal } from 'antd'
import { getLoginKey, getQRCode, getQRCodeState } from '@/api/user'
import qrGuide from '@/static/qr_guide.png'

type UserInfo = {
    avatarUrl: string;
    name: string
}

const User: FC = () => {
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [qrCodeUrl, setQRCodeUrl] = useState('')
    const [unikey, setUniKey] = useState('')
    const [userInfo, setUserInfo] = useState<UserInfo>()
    let timer: null | NodeJS.Timeout = null
    // 轮询二维码状态
    function checkQRCodeState(key: string) {
        if (!isModalVisible) {
            if (timer) clearInterval(timer)
            return
        }
        if (timer) clearInterval(timer)
        timer = setInterval(async() => {
            const res = await getQRCodeState(key)
            // console.log(res)
            // 登录成功
            if (res.code === 802) {
                setUserInfo({
                    name: res.nickname || '',
                    avatarUrl: res.avatarUrl || ''
                })
                onCancel()
            }
        }, 2000)
    }
    // let onCheckQRCodeState = useCallback(checkQRCodeState, [state, isModalVisible])
    useEffect(() => {
        if (isModalVisible) 
            checkQRCodeState(unikey)
        
    }, [isModalVisible])
    async function onOpenModal() {
        const { unikey } = await getLoginKey()
        const { qrimg } = await getQRCode(unikey)
        setUniKey(unikey)
        setQRCodeUrl(qrimg)
        await setIsModalVisible(true)
        // onCheckQRCodeState(unikey)
    }
    function onCancel() {
        setIsModalVisible(false)
        if (timer) clearInterval(timer)
    }
    return (
        <div>
            <div onClick={() => onOpenModal()}>
                <Avatar className='default-avatar' src={userInfo}>
                    登录
                </Avatar>
            </div>
            <Modal
                onCancel={() => onCancel()}
                visible={isModalVisible}
                title="登录"
                footer= {null}
                centered
            >
                <img height='220' src={qrGuide} alt="" />
                <div className='qr-code'>
                    <div>扫码登录</div>
                    <img width='150' src={qrCodeUrl} alt="" />
                    <p style={{fontSize: '12px'}}>
                        使用&nbsp;
                        <a target="_blank" href="https://music.163.com/#/download" rel="noreferrer">网易云音乐APP</a>
                        &nbsp;扫码登录
                    </p>
                </div>
            </Modal>
        </div>
    )
}

export default User
