import { useState } from 'react'
import './App.css'
import { ChatInput } from './components/ChatInput.jsx';
import { ChatMessages } from './components/ChatMessages.jsx';

function App() {
  //const array = React.useState([
        const [chatMessages, setChatMessages] = useState([]);

        //const [chatMessages, setChatMessages] = array; // current chat messages and function to update them
        //const chatMessages = array[0]; // current chat messages
        //const setChatMessages = array[1]; // function to update chat messages

        return (
          <div className="app-container"> 
            { chatMessages.length === 0 &&
            <p className="welcome-message">Welcome to the chatbot app! send a message below.</p> }         
            <ChatMessages chatMessages={chatMessages} />   
            <ChatInput chatMessages={chatMessages} setChatMessages={setChatMessages} />
          </div>
        );
}

export default App
