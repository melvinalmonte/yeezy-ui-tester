import axios from "axios";

export default class Api {
  static quoteGenerator = () =>
    axios({
      url: "https://fast-kanye-rest.vercel.app/ye",
      method: "GET",
    });
}
