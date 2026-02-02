import RobotImage from '../assets/robot.png';
import UserProfileImage from '../assets/user.png';
import '../styles/ChatMessage.css';

export function ChatMessage(props)
{
  const {message, sender} = props;
  return (
      <div className={sender === "robot" ? "robot-message" : "user-message"} >
        {sender === "robot" && 
          (<img src={RobotImage} className="chat-message-profile"/>)}
        <div className="message-text">
          {message}
        </div>
        {sender === "user" && (
          <img src={UserProfileImage} className="chat-message-profile"/>)}
      </div>
    );     
}