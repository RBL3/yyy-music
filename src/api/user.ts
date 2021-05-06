import request from '@/utils/request'

export interface UniKey {
    data: UniKeyData;
    code: number;
}

export interface UniKeyData {
    code:   number;
    unikey: string;
}

export function getLoginKey(): Promise<UniKeyData> {
    return request.get('/api/login/qr/key')
} 

export interface QRCode {
    code: number;
    data: QRCodeData;
}

export interface QRCodeData {
    qrurl: string;
    qrimg: string;
}

export function getQRCode(key: string): Promise<QRCodeData> {
    return request.get('/api/login/qr/create', { params: {
        key,
        qrimg: true
    }})
}

export interface QRCodeState {
    code:    number;
    message: string;
    cookie:  string;
}

export interface QRCodeSuccess {
    avatarUrl?: string;
    code:      number;
    cookie:    string;
    message:   string;
    nickname?:  string;
}


/**
 * 查询二维码状态
 */
export function getQRCodeState(key: string): Promise<QRCodeSuccess> {
    return request.get('/api/login/qr/check', { params: {
        key
    }})
}