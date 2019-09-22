import React from "react";
import {Redirect} from "react-router";

export default function Auth(props) {
  const access_token = localStorage.getItem('accessToken');
  const current_path = props.location.pathname;
  return(
    (() => {
      if (access_token != null) {
        return ((current_path == '/sign_in' || current_path == '/sign_up') ? <Redirect to={'/world'}/> : props.children);
      } else {
        return ((current_path == '/sign_in' || current_path == '/sign_up') ? props.children : <Redirect to={'/sign_up'}/>);
      }
    })()
  )
}
