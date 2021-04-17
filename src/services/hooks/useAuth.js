import { useState, useEffect, useCallback } from "react";
import { useLazyFetch } from "./index";
import axios from "axios";
// import env from "../../../env";

export default () => {
  const getUserToken = useCallback(async (code) => {
    console.log("userCode: ", process.env.REACT_APP_CLIENT_SECRET);
    try {
      await axios({
        url: "https://github.com/login/oauth/access_token",
        method: "POST",
        data: {
          client_secret: process.env.REACT_APP_CLIENT_SECRET,
          client_id: process.env.REACT_APP_CLIENT_ID,
          code: code,
        },
      })
        .then((res) => {
          console.log("repsposta do token: ", res);
        })
        .catch((err) => {
          console.log("err: ", err);
        });
    } catch {}
  }, []);

  return { getUserToken };
};
