import React from 'react'
import s from './Message.module.css'


// нужно создать правильный тип вместо any
export type MessagePropsType = {
    id: number;
    user: UserType;
    message: MessagType;
};


type UserType = {
     avatar: string;
     name: string;
}
type MessagType = {
    text: string;
    time: string;
}




// нужно отобразить приходящие данные
const Message = (props: MessagePropsType) => {
    return (
        <div id={'hw1-message-' + props.message.id} className={s.message}>
            <div className={s.imageAndText}>
                <img src= {props.user.avatar}
                    id={'hw1-avatar-' + props.message.id}
                    // создаёт студент

                    //
                />
                <div className={s.text}>
                    <div id={'hw1-name-' + props.message.id} className={s.name}>
                        {/*создаёт студент*/}
                        {props.user.name}
                        {/**/}
                    </div>
                    <pre id={'hw1-text-' + props.message.id} className={s.messageText}>
                        {/*создаёт студент*/}
                        {props.message.text}
                        {/**/}
                    </pre>
                </div>
            </div>
            <div id={'hw1-time-' + props.message.id} className={s.time}>
                {/*создаёт студент*/}
                {props.message.time}
                {/**/}
            </div>
        </div>

    )
}


export default Message
