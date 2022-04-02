import React, { Component } from 'react';
import NextLink from 'next/link';

class InboxComponent extends Component {
  render() {
    const { messages } = this.props;
    return (
      <main className="flex justify-center items-center bg-blue-200 min-h-screen flex-col space-y-5">
        <div className="w-[300px] p-8 bg-[#f3f3f3] shadow-md rounded-xl">
          <h1 className="font-semibold text-2xl text-center mb-7">Messages</h1>
          {messages[0] ? (
            <ul>
              {messages.map((message) => (
                <NextLink href={`/messages/${message._id}`} key={message._id}>
                  <a className="">
                    <li className="bg-red-400 w-full rounded-md shadow-md cursor-pointer p-3 mb-3">
                      <div className="flex justify-start items-center">
                        {!message.isRead ? (
                          <div className="w-4 h-4 bg-white rounded-full mr-3"></div>
                        ) : null}
                        <h3 className="truncate font-semibold mb-1">
                          {message.subject}
                        </h3>
                      </div>
                      <p className="truncate">{message.content}</p>
                    </li>
                  </a>
                </NextLink>
              ))}
            </ul>
          ) : (
            <div>
              <p>You have no messages</p>
            </div>
          )}
        </div>
      </main>
    );
  }
}

export default InboxComponent;
