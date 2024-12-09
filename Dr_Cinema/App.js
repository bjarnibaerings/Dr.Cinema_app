import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as storeProvider } from 'react-redux';
import store from "./src/Redux/store";
import AppContainer from "./src/Routes"

export default function App() {
  return (
    <AppContainer/>
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
