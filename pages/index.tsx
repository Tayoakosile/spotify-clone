import React, { useEffect, useState } from "react";
import Login from "../components/Login";
import { reactLocalStorage } from "reactjs-localstorage";
import SpotifyWebApi from "spotify-web-api-js";
import { getTokenFromUrl } from "../spotify";
import Player from "../components/Player";

const spotify = new SpotifyWebApi();

const index = () => {
  const [token, setToken] = useState<string | null>(null);
  useEffect(() => {
    const hash = getTokenFromUrl();
    const _token: string = hash.access_token;
    const tokenFromLocalStorage: string = reactLocalStorage.get("token");
    setToken(tokenFromLocalStorage);
    if (_token !== undefined) {
      setToken(_token);
      reactLocalStorage.set("token", _token);
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        console.log(user);
      });
    }

    window.location.hash = "";
  }, [getTokenFromUrl]);

  return (
    <div>
      {/* Spotify Logo */}
      {token ? <Player /> : <Login />}
      {/* Login with spotify button */}
    </div>
  );
};

export default index;
