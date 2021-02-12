let _loginService = null;

class LoginController {
  constructor({ LoginService }) {
    _loginService = LoginService;
  }

  async singIn(req, res) {
    const { body } = req;
    console.log(body);
    const creds = await _loginService.singIn(body);
    return res.send(creds);
  }
}
module.exports = LoginController;
