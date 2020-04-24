const saveMessage = (message) => {
  const oldMessages = JSON.parse(localStorage.getItem('messages') || '[]');
  localStorage.setItem('messages', JSON.stringify([...oldMessages, message]));
  return JSON.parse(localStorage.getItem('messages') || '[]');
};

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export { saveMessage, capitalize };
