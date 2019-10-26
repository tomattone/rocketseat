import React from 'react';
import {SafeAreaView} from 'react-native';
import Lottie from 'lottie-react-native';

import moto from './assets/motorcycle.json';
import galinha from './assets/funky-chicken.json';

// import { Container } from './styles';

export default function App() {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Lottie autoSize resizeMode="contain" source={galinha} autoPlay loop />
    </SafeAreaView>
  );
}
