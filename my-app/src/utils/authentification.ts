
const defaultSession = JSON.stringify({ username: '' });

const authentification = {

  session: JSON.parse(localStorage.getItem('session') || defaultSession),
  isAuthenticated() {
    if (window.localStorage.jwt || window.localStorage.session) {
      this.session = JSON.parse(localStorage.getItem('session') || '{}');
      return true;
    }
    return false;
  },
  authetificate(session: any) {
    this.session = session;
    localStorage.setItem('session', JSON.stringify(session));
  },
  signout() {
    localStorage.removeItem('session');
    localStorage.removeItem('session-state');
  },
};

export default authentification;
