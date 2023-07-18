import React from 'react';
import {View, StyleSheet} from 'react-native';
import RootNavigator from './src/pages/routes';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <RootNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
