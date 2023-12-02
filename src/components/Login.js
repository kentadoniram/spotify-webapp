import React from "react";

const Login = ({ CLIENT_ID, REDIRECT_URI, AUTH_ENDPOINT, RESPONSE_TYPE }) => {
  return (
    <>
      <h2>Please Login</h2>
      <a
        href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
      >
        Login to Spotify
      </a>
    </>
  );
};

export default Login;
