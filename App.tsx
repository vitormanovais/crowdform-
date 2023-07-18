import React from 'react';
import {View, StyleSheet} from 'react-native';
import Login from './src/pages/Login';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <Login />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
