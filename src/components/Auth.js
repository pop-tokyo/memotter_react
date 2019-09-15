import React from "react";
import {Redirect} from "react-router";

export default function Auth(props) {
  const access_token = localStorage.getItem('accessToken');
  return (
    access_token != null ? props.children : <Redirect to={'/sign_up'}/>
)
}
