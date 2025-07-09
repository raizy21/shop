export function getSignup(req, res) {
  res.render("customer/auth/signup");
}

export function getLogin(req, res) {
  res.send("Login Page");
}
