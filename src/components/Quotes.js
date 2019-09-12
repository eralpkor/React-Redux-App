import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getQuote } from "../actions";

const Quotes = ({ getQuote, quote, isFetching, error }) => {
  useEffect(() => {
    getQuote();
  }, [getQuote]);

  return (
    <div>
      <h3>Chuck Norris facts</h3>
      <h4>{}</h4>
    </div>
  );
};

export default Quotes;
