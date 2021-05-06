import request from '@/utils/request'

/**
 * 搜索列表
 */

export interface Artist {
    id: number;
    name: string;
    picUrl: null;
    alias: any[];
    albumSize: number;
    picId: number;
    img1v1Url: string;
    img1v1: number;
    trans: null;
}

export interface Album {
    id: number;
    name: string;
    artist: Artist;
    publishTime: number;
    size: number;
    copyrightId: number;
    status: number;
    picId: number;
    mark: number;
}

export interface Song {
    id: number;
    name: string;
    artists: Artist[];
    album: Album;
    duration: number;
    copyrightId: number;
    status: number;
    alias: any[];
    rtype: number;
    ftype: number;
    mvid: number;
    fee: number;
    rUrl: null;
    mark: number;
}

export interface SearchRec {
    songs: Song[];
    hasMore: boolean;
    songCount: number;
}

export function getSearchRec(keywords: string): Promise<SearchRec> {
    return request.get('/api/search', { params: { keywords } })
}