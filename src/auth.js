class Auth {
  constructor() {
    this.authenticated = false;
  }
  logIn(callback) {
    this.authenticated = true;
    callback();
  }
  logOut(callback) {
    this.authenticated = false;
    callback();
  }
  isAuthenticated() {
    return this.authenticated;
  }
}

export default new Auth();
