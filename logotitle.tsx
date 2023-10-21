import React from 'react';
import {Image} from 'react-native';

function LogoTitle() {
  return (
    <Image
      style={{width: 50, height: 50}}
      source={{uri: 'https://reactjs.org/logo-og.png'}}
    />
  );
}

export default LogoTitle;
