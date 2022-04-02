import React, { Component } from 'react';
import Header from './Header';

class HomeComponent extends Component {
  render() {
    const { unread, messageLength, router } = this.props;

    return (
      <div>
        <Header />
        <main className="flex justify-center items-center bg-blue-200 h-[100vh] flex-col space-y-5">
          <p>
            You have {unread} messages out of {messageLength} total
          </p>
          <button
            className="bg-blue-700 px-4 hover:scale-105 transition-all shadow-xl py-3 rounded-md flex justify-center items-center text-white"
            onClick={() => router.push('/inbox')}
          >
            View Messages
          </button>
        </main>
      </div>
    );
  }
}

export default HomeComponent;
