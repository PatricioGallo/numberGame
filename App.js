import { StyleSheet, Text, View } from 'react-native';
import Header from './Components/Header';
import StartGameScreen from './Screens/StartGameScreen';
import GameScreen from './Screens/GameScreen';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import { ActivityIndicator } from 'react-native';
import { colors } from './Constants/colors';


const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});



export default function App() {

  const [userNumber, setUserNumber] = useState();
  const [loaded] = useFonts({
    'Lato-Regular' : require('./assets/fonts/Lato-Regular.ttf'),
    'Lato-Bold' : require('./assets/fonts/Lato-Bold.ttf'),
  });

  if(!loaded){
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={colors.primary}/>
      </View>
    );
  }

  const condition = !userNumber? 
    <StartGameScreen setUserNumber={setUserNumber}/>
  : 
    <GameScreen userNumber={userNumber}/>

  return (
    <View >
      <Header title={"Adivina el numero"}/>
      {condition}
    </View>
  );
}


