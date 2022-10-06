import React from 'react';
import {PlayCircleFilled,LeftCircleOutlined} from '@ant-design/icons';
import './Button.scss'

interface Props {
  leftIcon?:boolean
}
export default function Button(props:Props) {
  const {leftIcon}=props;
  return (
    <div className='Button'>
      {leftIcon?   <button type='button'>
        <LeftCircleOutlined />Exit
    </button>
    :
     <button type='button'>Details<PlayCircleFilled/>
    </button>}
   </div>
    
  )
}
