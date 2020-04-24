const saveMessage = (message) => {
  const oldMessages = JSON.parse(localStorage.getItem('messages') || '[]');
  localStorage.setItem('messages', JSON.stringify([...oldMessages, message]));
  return JSON.parse(localStorage.getItem('messages') || '[]');
};

export { saveMessage };
