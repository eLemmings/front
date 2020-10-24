export class API {
  constructor() {
		let origin = window.location.origin;
    let hostname = window.location.hostname;
    let port = window.location.port;
		this.url =
			hostname == "localhost" && port == '3000'
				? (this.url = "http://localhost:5000")
				: (this.url = origin + "/api");
  }

  createRequest(endpoint, method, body) {
    let reqParams = {
      method: method,
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json;charset=UTF-8",
        Authorization: "Bearer " + getCookie("token"),
      },
    };

    if (method === "GET") delete reqParams.body;

    return fetch(`${this.url}/${endpoint}`, reqParams)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  }

  registerUser(nick, email, password) {
    const userData = { nick, email, password };
    return this.createRequest("register", "POST", userData);
  }

  loginUser(email, password) {
    const userData = { email, password };
    return this.createRequest("login", "POST", userData).then((data) => {
      setCookie("token", data.token);
      return data;
    });
  }

  getUserData() {
    return this.createRequest("user", "GET");
  }

  updateUserData(data) {
    return this.createRequest("user/data", "PUT", data);
  }

  createShare(id) {
    return this.createRequest("share", "PUT", {index: id});
  }

  getUserShares() {
    return this.createRequest("share", "GET");
  }

  getShare(code) {
    return this.createRequest("share/" + code, "GET");
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
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

export function deleteCookie(cname) {
  document.cookie = cname + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
