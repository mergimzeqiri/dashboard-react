import React from 'react';
import {PlayCircleFilled,LeftCircleOutlined} from '@ant-design/icons';
import './Button.scss'

interface Props {
  leftIcon?:boolean
  onClick?: (id?:React.MouseEvent<HTMLButtonElement>) => void
}
export default function Button(props:Props) {
  const {leftIcon}=props;

  return (
    <div className='Button'>
      {leftIcon?   <button type='button' onClick={props.onClick}>
        <LeftCircleOutlined />Exit
    </button>
    :
     <button onClick={props.onClick} type='button'>Details<PlayCircleFilled/>
    </button>}
   </div>
    
  )
}
