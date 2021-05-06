import { Song } from '@/api/search'
import { ReactElement, CSSProperties  } from 'react'

export function formatList (list: Song[] = []) {
    return list.map(song => {
      return {
        id: song.id,
        name: song.name,
        artist: song.artists[0].name,
        cover: song.artists[0] ? song.artists[0].img1v1Url : ''
      }
    })
}

type Options = {
  leftVal: string;
  rightVal: string;
  onClick?: () => void;
  style?: CSSProperties 
}

export function transReactEel ({ leftVal, rightVal, onClick, style = {} }: Options): ReactElement {
  return (
    <div onClick={onClick} style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        ...style
    }}>
      <span>{leftVal}</span>
      <span>{rightVal}</span>
    </div>
  )
}