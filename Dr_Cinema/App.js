import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as StoreProvider } from 'react-redux';
import store from "./src/Redux/store";
import { Counter } from './src/Components/Counter/counter';

export default function App() {
  return (
    <StoreProvider store={store}>
      <View style={styles.container}>
      <Text>HELLO</Text>
       <Counter/>
      </View>
    </StoreProvider>
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
