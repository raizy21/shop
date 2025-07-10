export function getSignup(req, res) {
  res.render("customer/auth/signup");
}

export function signup(req, res) {
  res.send("Signup Successful");
}

export function getLogin(req, res) {
  res.send("Login Page");
}
