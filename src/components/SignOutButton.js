import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import history from '../history';

function SignOutButton(props) {
  const signOut = () => {
    localStorage.removeItem('accessToken');
    props.history.push('/sign_in');
    props.setCurrentPage('/sign_in');
  };

  return (
    <button onClick={signOut}>
      ログアウト
    </button>
  )
}

export default withRouter(SignOutButton);
