import React, { Component } from 'react';
import io from 'socket.io-client';
import { animateScroll } from "react-scroll";


class Chat extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            message: '',
            messages: [],
        };

        this.socket = io('https://chat-server.wissamsawah.me');

        this.socket.on('msgReceived', function(data) {
            addMessage(data);
            });

        this.socket.on('chatHistory', function(history) {
            restoreHistory(history);
        });

        this.sendMessage = e => {
            e.preventDefault();
            const userMessage = this.state.message;

            if (userMessage.length !== 0 && this.state.username.length !== 0) {
                this.socket.emit('msgSend', {
                        timestamp: new Date().toLocaleTimeString().split(0,5),
                        user: this.state.username,
                        message: this.state.message,
                    });
                this.setState({message: ''});
            }
        };


        this.getHistory = e => {
            console.log("inside getHistory");
            e.preventDefault();
            this.socket.emit('getHistory', {});
        };

        this.setUsername = e => {
           const username = this.state.username;

           this.setState({username: username});
       };

       const addMessage = data => {
           const allMessages = [
               ...this.state.messages,
               data
           ];

           this.setState({messages: allMessages}, this.scrollToBottom);
       };

       const restoreHistory = history => {
           var allMessages = history.map(function(msg) {
               return {timestamp: msg.timeMsg, user: msg.user, message: msg.message};
           });

           this.setState({messages: allMessages}, this.scrollToBottom);
       };
   }

    scrollToBottom() {
        animateScroll.scrollToBottom({
            containerId: "allMessages", smooth: "easeOutQuint"
    });
}

    render() {
        return (
            <div className="Form1">
                <h1>Messages:</h1>
                <button onClick={this.getHistory} className="historyButton">Older messages</button>
                <div id="allMessages" className="allMessages">
                {this.state.messages.map((message, key) => {
                    return (
                        <div className="chatLine" key={key}>
                        {message.timestamp} - {message.user}: {message.message}</div>
                    );
                })}
                </div>
                Write your name:
                <div className="username">
                    <form onSubmit={this.setUsername}>
                        <input type="text" className="usernameBox" required
                        value={this.state.username}
                        onChange={e => this.setState({username: e.target.value})} />
                    </form>
                </div>
                <br />
                Write a new message:
                <br />

                <textarea id="newMessage" className="newMessage" required
                    value={this.state.message}
                    onChange={e => this.setState({message: e.target.value})} />
                <button onClick={this.sendMessage} className="buttonSend">Send</button>
            </div>
        );
    }
}

export default Chat;
