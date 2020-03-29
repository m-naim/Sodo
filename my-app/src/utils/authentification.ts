import newId from './newId';
import {
  supportsCrypto, hash, encode64,
} from './crypto';

// const defaultSession = JSON.stringify({ username: '' });
const defaultUsers = JSON.stringify({ 0: {} });

const authentification = {

  session: { uid: '', username: '' },
  isAuthenticated() {
    if (window.localStorage.jwt || window.localStorage.session) {
      this.session = JSON.parse(localStorage.getItem('session') || '{}');
      return true;
    }
    return false;
  },
  async authetificate(user: any) {
    const users = JSON.parse(localStorage.getItem('users') || defaultUsers);
    let uid :any = Object.keys(users).find((key) => users[key].username === user.username);
    let authSucess: string|boolean = false;
    if (uid) {
      const password = localStorage.getItem(uid);
      const hashed = await hash('SHA-256', user.password);
      authSucess = password === encode64(hashed);
    } else [uid, authSucess] = this.createUser(user);

    if (authSucess) {
      this.session = { uid, username: user.username };
      localStorage.setItem('session', JSON.stringify(this.session));
    }
    return authSucess;
  },
  createUser(user: any) {
    const newuser = { username: user.username };
    const users = JSON.parse(localStorage.getItem('users') || defaultUsers);
    const uid:string = newId('U');

    if (supportsCrypto()) {
      hash('SHA-256', user.password).then((hashed) => {
        localStorage.setItem(uid, encode64(hashed));
      });
    }
    users[uid] = newuser;
    // console.log(JSON.stringify(users));
    localStorage.setItem('users', JSON.stringify(users));
    return [uid, true];
  },
  signout() {
    localStorage.removeItem('session');
    localStorage.removeItem('session-state');
  },
};

export default authentification;
