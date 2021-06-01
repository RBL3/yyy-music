import { FC, useState, useEffect, ReactElement } from 'react'
import { AutoComplete } from 'antd'
import { useQuery } from 'react-query'
import { getSearchRec, SearchRec } from '@/api/search'
import { debounce } from 'lodash'
import { formatList, transReactEel } from '@/utils/index'

interface SongList {
    value: number | string;
    label: string | ReactElement;
    key: number
}

const Search: FC = () => {
    const [searchKey, setSearchKey] = useState('')
    const [options, setOptions] = useState<SongList[]>([])
    const { data } = useQuery<SearchRec>([searchKey], () => getSearchRec(searchKey), {
        enabled: !!searchKey
    })
    useEffect(() => {
        const list = formatList(data?.songs)
        setOptions(list.map(({id, name, artist}) => (
            {
                value: `${name} ${artist}`,
                label: transReactEel({
                    leftVal: name,
                    rightVal: artist
                }),
                key: id
            }
        )))
    }, [data])

    function onSearch(value: string) {
        console.log('search', value)
        // let filterArr = data?.songs.filter(item => item.id === +(value))
        // let label: string = filterArr && filterArr.length ? filterArr[0].name : ''
        setSearchKey(value)
    }
    function onSelect(value: any, option: any) {        
        console.log(value, option)
    }
    return (
        <AutoComplete
            allowClear
            className='search-box'
            placeholder='音乐/视频/电台/用户'
            options={options}
            onSearch={debounce(onSearch, 250, { 'maxWait': 1000 })}
            onSelect={onSelect}
        />
    )
}

export default Search