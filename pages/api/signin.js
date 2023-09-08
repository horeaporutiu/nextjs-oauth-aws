export default function handler(req, res) {
  res.redirect(
    "https://miro.com/oauth/authorize?response_type=code&client_id=" +
      process.env.REACT_APP_CLIENT_ID +
      "&redirect_uri=" +
      process.env.REACT_APP_REDIRECT_URL,
  );
}
