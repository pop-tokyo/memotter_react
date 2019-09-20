import React from "react";
import {Redirect} from "react-router";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";

export default function Auth(props) {
  const access_token = localStorage.getItem('accessToken');
  const current_path = props.location.pathname;
  /* eslint no-unused-expressions: "off" */
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
