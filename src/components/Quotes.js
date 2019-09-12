import React, { useEffect } from "react";
import axios from "axios";

const Quotes = () => {
  useEffect(() => {
    axios
      .get("https://api.chucknorris.io/jokes/random")
      .then(res => console.log(res.data));
  });

  return (
    <div>
      <h3>Chuck Norris facts</h3>
      <h4>{}</h4>
    </div>
  );
};

export default Quotes;
