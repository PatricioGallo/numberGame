import { StyleSheet, Text, View } from 'react-native';
import Header from './Components/Header';
import StartGameScreen from './Screens/StartGameScreen';

export default function App() {
  return (
    <View >
      <Header title={"Adivina el numero"}/>
      <StartGameScreen />
    </View>
  );
}


