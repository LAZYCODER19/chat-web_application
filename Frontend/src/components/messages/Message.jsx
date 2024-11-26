import useConversation from "../../zustand/useConversation"
import {useAuthContext} from '../../context/AuthContext'
import {extractTime} from '../../utils/extractTime'

const Message = ({message}) => {
  const {authUser} = useAuthContext()
  const {selectedConversation} = useConversation()
  const fromMe = message.senderId === authUser._id
  const formattedTime = extractTime(message.createdAt)
  const chatClassName = fromMe ? "chat-end" : "chat-start"
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic
  const bubbleBgColour = fromMe ? "bg-blue-500" : ""
  const shakeClass = message.shouldShake ? "shake" : ""
  return (
    <div className={`chat ${chatClassName}`}>
        <div className=" chat-image avatar">
            <div className="w-10 rounded-full">
                <img alt="Bubble component" src={profilePic}></img>
            </div>
        </div>
        <div className={`chat-bubble text-white ${bubbleBgColour} ${shakeClass}`}>{message.message}</div>
        <div className="chat-footer text-xs opacity-50 flex gap-1 items-center text-lime-100 pt-1">{formattedTime}</div>
    </div>
  )
}

export default Message