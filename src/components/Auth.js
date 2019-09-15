import React from "react";
import {Redirect} from "react-router";

export default function Auth(props) {
  const token = localStorage.getItem('accessToken');
  return (
     token != null ? props.children : <Redirect to={'/sign_up'}/>
)
}
