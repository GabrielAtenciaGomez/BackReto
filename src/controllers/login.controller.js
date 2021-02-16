let _loginService = null;

class LoginController {
  constructor({ LoginService }) {
    _loginService = LoginService;
  }

  async singIn(req, res) {
    const { body } = req;
    const creds = await _loginService.singIn(body);

    if (!creds) {
      console.log("datos");
    }
    console.log("datos");
    return res.send(creds);
  }
  async isLoged(req, res) {
    const result = await _loginService.isLoged();
    res.send(result);
  }
}
module.exports = LoginController;
