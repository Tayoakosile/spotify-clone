import React, { useEffect, useState } from "react";
import Login from "../components/Login";
import { reactLocalStorage } from "reactjs-localstorage";
import SpotifyWebApi from "spotify-web-api-js";
import { getTokenFromUrl } from "../spotify";
import Player from "../components/Player";
import { useDataLayerValue } from "../components/DataLayer";

const spotify = new SpotifyWebApi();

const index = () => {
  // const [token, setToken] = useState<string | null | boolean>(null);
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    const _token: string = hash.access_token;
    _token !== undefined && reactLocalStorage.set("token", _token);
    const tokenFromUrlToLocalStorage = reactLocalStorage.get("token", true);

    if (_token || tokenFromUrlToLocalStorage) {
      // If token is in url then store it in local storage
      console.log("here");
      // Set action to global state
      dispatch({
        type: "SET_TOKEN",
        token: _token || tokenFromUrlToLocalStorage,
      });
      // Access token from spotify
      spotify.setAccessToken(tokenFromUrlToLocalStorage);
      // Get  my account details
      spotify
        .getMe()
        .then((user) => {
          console.log(user);
          console.log(user, "spotify user");
          dispatch({
            type: "SET_USER",
            user,
          });
        })
        .catch(() => {
          reactLocalStorage.remove("token");
          dispatch({
            type: "SET_TOKEN",
            token: null,
          });
        });

      spotify
        .getUserPlaylists()
        .then((playlists) => {
          console.log(playlists);
          dispatch({
            type: "SET_PLAYLIST",
            playlist: playlists,
          });
        })
        .catch(() => {
          reactLocalStorage.remove("token");
          dispatch({
            type: "SET_TOKEN",
            token: null,
          });
        });
    }
    window.location.hash = "";
  }, [getTokenFromUrl]);

  return (
    <div>
      {/* Spotify Logo */}
      {token ? <Player spotify={spotify} /> : <Login />}
      {/* Login with spotify button */}
    </div>
  );
};

export default index;
