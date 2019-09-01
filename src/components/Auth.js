import React from "react";
import { Redirect} from "react-router";

export default function Auth(props) {
  return (
    props.access_token != null? props.children : <Redirect to={'/sign_in'}/>
  )
}
