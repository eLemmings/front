class API {
  constructor(url) {
    this.url = url;
    this.response = undefined;
  }

  createRequest(endpoint, method, body) {
    return fetch(`${this.url}/${endpoint}`, {
      method: method,
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json;charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => error);
  }

  registerUser(nick, email, password) {
    const userData = {
      nick,
      email,
      password,
    };
    return this.createRequest("register", "POST", userData); // Zwraca Promise
  }

  loginUser(email, password) {
    const userData = {
      email,
      password,
    };
    return this.createRequest("login", "POST", userData); // Zwraca Promise
  }
}

export default API;
