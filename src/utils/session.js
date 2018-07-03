function setSession(key, value) {
  if(value === null || value === undefined) {
    return sessionStorage.setItem(key, '');
  }
  return sessionStorage.setItem(key, value);
}

function getSession(key) {
  return sessionStorage.getItem(key);
}

function deleteSession(key) {
  return sessionStorage.removeItem(key);
}

export {
  setSession,
  getSession,
  deleteSession
}
