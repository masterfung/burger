import axios from "axios";

const instance = axios.create({
  baseURL: "https://reactfulburger.firebaseio.com/"
});

export default instance;
