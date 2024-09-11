import axios from "axios";

export default axios.create({
  baseURL: "https://api.edamam.com/api",
  params: {
    app_id: "0d2cf00c",
    app_key: "feedc68e9ce12eeb44eb3caff3cc438f",
    type: "public",
  },
});
