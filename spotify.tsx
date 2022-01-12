export const authEndPoint: string = "https://accounts.spotify.com/authorize";

// What we want from a (registered spotify) user (Permissions)
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

//Get access token from string
export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

export const loginUrl = `${authEndPoint}?client_id=${
  process.env.NEXT_PUBLIC_SPOTIFY_ID
}&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URL}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
