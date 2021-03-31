import React from 'react'

import style from './Message.module.css'

type MessageProps = {
    avatar: string
    message: string
    name: string
    time: string
}

function Message(props: MessageProps) {
    return (
        <div className={ style.container }>
            <div>
                <img className={ style.avatar } src={ props.avatar } alt=""/>
            </div>
            <div className={ style.descriptionContainer }>
                <h1 className={ style.name }>{ props.name }</h1>
                <div className={ style.messageContainer }>
                    <div className={ style.message }>{ props.message }</div>
                    <div className={ style.time }>{ props.time }</div>
                </div>
            </div>
        </div>
    )
}

export default Message
