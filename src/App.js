import { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login";
import ArtistSearch from "./components/ArtistSearch";

function App() {
  const CLIENT_ID = "6047b1b61db5455abd0dbb9adce88dbc";
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  // const tokenEndPoint = "https://accounts.spotify.com/api/token";
  // const scope = "user-read-private user-read-email";
  // const authUrl = new URL("https://accounts.spotify.com/authorize");

  const [token, setToken] = useState("");

  useEffect(() => {
    const hash = window.location.hash;
    let token = localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((element) => element.startsWith("access_token"))
        .split("=")[1];
      window.location.hash = "";
      localStorage.setItem("token", token);
    }
    setToken(token);
  }, []);

  const logout = () => {
    setToken("");
    if (localStorage.getItem("token") !== null) {
      window.localStorage.removeItem("token");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Search</h1>
        {token ? (
          <>
            <ArtistSearch token={token} />
          </>
        ) : (
          <Login
            {...{ CLIENT_ID, REDIRECT_URI, AUTH_ENDPOINT, RESPONSE_TYPE }}
          />
        )}
        {token && <button onClick={logout}>Logout</button>}
      </header>
    </div>
  );
}

export default App;
