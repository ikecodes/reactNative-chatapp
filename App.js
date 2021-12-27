import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useAssets } from 'expo-asset';

function App() {
  return (
    <View style={styles.container}>
      <Text>fuckoff !</Text>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function Main(params) {
  const [assets] = useAssets(require('./assets/chatbg.png'), require('./assets/icon-square.png'), require('./assets/user-icon.png'), require('./assets/welcome-img.png'));
  if (!assets) {
    return <Text>Loading...</Text>;
  }
  return <App />;
}

export default Main;
