import { StyleSheet, Text, View } from 'react-native';
import Header from './Components/Header';
import StartGameScreen from './Screens/StartGameScreen';
import GameScreen from './Screens/GameScreen';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import { ActivityIndicator } from 'react-native';
import { colors } from './Constants/colors';
import GameOver from './Screens/GameOver';

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
  const[numberRounds, setNumberRounds] = useState(0);

  if(!loaded){
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={colors.primary}/>
      </View>
    );
  }
  
  const gameOver = (rounds) => {
    setNumberRounds(rounds);
  };

  const returnGame = () => {
    setUserNumber(0);
    setNumberRounds(0);
  };



  const condition = !userNumber? 
    <StartGameScreen setUserNumber={setUserNumber}/>
  : 
    numberRounds === 0 ?
    <GameScreen userNumber={userNumber} gameOver={gameOver}/>
    :
    <GameOver userNumber={userNumber} rounds={numberRounds} returnGame={returnGame}/>



  return (
    <View >
      <Header title={numberRounds ? 'Juego terminado' : 'Adivina el numero'}/>
      {condition}
    </View>
  );
}


