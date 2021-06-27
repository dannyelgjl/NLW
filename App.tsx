import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native';
import SingIn from './src/screens/SingIn';
import { ThemeProvider } from 'styled-components';
import theme from './src/styles/theme/theme';

const App: React.FC = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <ThemeProvider theme={theme}>
      <SingIn />
    </ThemeProvider>
  </SafeAreaView>
)

export default App;
