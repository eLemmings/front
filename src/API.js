export class API {
  constructor(url) {
    this.url = url;
  }

  createRequest(endpoint, method, body, handler) {
    if (method == "GET") {
      return fetch(`${this.url}/${endpoint}`, {
        method: method,
        headers: {
          Authorization: "Bearer: " + getCookie("token"),
        },
      })
        .then((response) => response.json())
        .then((data) => handler(data))
        .catch((error) => error);
    }
    return fetch(`${this.url}/${endpoint}`, {
      method: method,
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json;charset=UTF-8",
        Authorization: "Bearer: " + getCookie("token"),
      },
    })
      .then((response) => response.json())
      .then((data) => handler(data))
      .catch((error) => error);
  }

  registerUser(nick, email, password, handler = () => {}) {
    const userData = { nick, email, password };
    return this.createRequest("register", "POST", userData, handler); // Zwraca Promise
  }

  loginUser(email, password, handler = () => {}) {
    const userData = { email, password };
    return this.createRequest("login", "POST", userData, handler); // Zwraca Promise
  }

  getUserData(handler = () => {}) {
    return this.createRequest("user", "GET", handler);
  }
}

export function setCookie(cname, cvalue, exdays = 1) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

export function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
