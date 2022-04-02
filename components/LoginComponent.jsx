import React, { Component } from 'react';
import { addAccessTokenToLocal } from '../LocalStorage/accessToken';
import { addUserToLocal } from '../LocalStorage/userStorage';
import { addMessagesToLocal } from '../LocalStorage/messagesStorage';

class LoginComponent extends Component {
  loginFunc = async (e) => {
    e.preventDefault();

    const { email, password, router } = this.props;

    const res = await fetch('http://localhost:5000/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();

    if (data.success) {
      await addAccessTokenToLocal(data.access_token);
      await addUserToLocal(data.data.user);
      await addMessagesToLocal(data.data.messages);
      router.push('/');
    }
  };

  render() {
    const { email, password, setEmail, setPassword } = this.props;

    return (
      <div className="w-full h-[100vh] flex justify-center items-center">
        <form
          onSubmit={this.loginFunc}
          className="p-12 flex-col w-[400px] bg-[#f3f3f3] flex rounded-lg"
        >
          <h1 className="mb-4 text-center font-semibold text-xl">Login</h1>
          <input
            type="email"
            placeholder="hi@gmail.com"
            className="mb-6 h-10 rounded-lg shadow-lg p-3"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
          />
          <input
            type="password"
            placeholder="********"
            className="mb-4 h-10 rounded-lg shadow-lg p-3"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
          />
          <button
            type="submit"
            className="bg-blue-500 h-10 rounded-md shadow-lg font-semibold text-lg text-white transition-all hover:scale-105"
          >
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginComponent;
