import React, { useState } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import Card from '../Components/Card';
import NumberContainer from '../Components/NumberContainer';
import { colors } from '../Constants/colors';


const styles = StyleSheet.create({
    gameScreen: {
        width: '100%',
        backgroundColor: colors.backgroundColor,
        alignItems: 'center',
        justifyContent: 'center',
    },
    card:{
        width: '80%',
        display: 'flex',
        alignItems: 'center',
        marginTop: 20,
        padding: 20,
        backgroundColor: "#fff",
    },
    buttonContainer:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 17,
        color: colors.dark,
        marginTop: 20,
        fontFamily: 'Lato-Regular',
    }
});


const GameScreen = ({userNumber}) => {
    
    const generateNumber = (min,max,exclude) => {
        min= Math.ceil(min);
        max= Math.floor(max);
    
        const guessNumber = Math.floor(Math.random() * (max-min) + min);
        if(guessNumber === exclude){
            return generateNumber(min,max,exclude);
        }else{
            return guessNumber;
        }
    };

    const [currentGuess, setCurrentGuess] = useState(generateNumber(1,99,userNumber));

  return (
    <View style={styles.gameScreen}>
        <Card style={styles.card}>
            <Text style={styles.text}>La suposicion del oponente es</Text>
            <NumberContainer number={currentGuess}/>
            <View style={styles.buttonContainer}>
                <Button 
                    title="Menor"
                    color={colors.primary}
                />
                <Button 
                    title="Mayor"
                    color={colors.primary}
                />
            </View>
        </Card>
    </View>
  )
}

export default GameScreen