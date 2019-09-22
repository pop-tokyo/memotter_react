import React from "react";
import {Redirect} from "react-router";

export default function Auth(props) {
  const access_token = localStorage.getItem('accessToken');
  const current_path = props.location.pathname;
  return(
    (() => {
      if (access_token != null) {
        return (current_path == '/world' ? props.children : <Redirect to={'/world'}/>);
      } else {
        return (current_path == '/world' ? <Redirect to={'/sign_up'}/> : props.children)
      }
    })()
  )
}
