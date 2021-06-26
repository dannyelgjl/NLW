import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native';
import SingIn from './src/screens/SingIn';


const App: React.FC = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <SingIn />
  </SafeAreaView>
)

export default App;
