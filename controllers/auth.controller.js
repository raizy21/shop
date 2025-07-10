import User from "../models/user.model.js";

export function getSignup(req, res) {
  res.render("customer/auth/signup");
}

export async function signup(req, res) {
  const user = new User(
    req.body.email,
    req.body.password,
    req.body.fullname,
    req.body.street,
    req.body.postal,
    req.body.city
  );

  await user.signup();

  res.redirect("/login");
}

export function getLogin(req, res) {
  res.render("customer/auth/login");
}
