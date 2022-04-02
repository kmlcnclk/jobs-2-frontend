export const addMessagesToLocal = (messages) => {
  const getToken = getMessagesFromLocal();

  if (getToken.indexOf(messages) === -1 && messages !== '') {
    getToken.push(messages);
  }

  window.localStorage.setItem('messages', JSON.stringify(getToken));
};

export const getMessagesFromLocal = () => {
  let messages;
  if (window.localStorage.getItem('messages') === null) {
    messages = [];
  } else {
    messages = JSON.parse(window.localStorage.getItem('messages'));
  }
  return messages;
};

export const deleteMessagesFromLocal = () => {
  window.localStorage.removeItem('messages');
};
