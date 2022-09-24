import React, { useState } from 'react'
import { Button, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import Card from '../Components/Card';
import { colors } from '../Constants/colors';
import Input from '../Components/Input';
import NumberContainer from '../Components/NumberContainer';

const styles = StyleSheet.create({
    bodyContainer: {
      width: '100%',
      backgroundColor: colors.backgroundColor,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title:{
        fontSize: 19,
        color: colors.dark,
        fontFamily: 'Lato-Bold',
        marginTop: 20,
    },
    gameContainer: {
        width: '80%',
        display: 'flex',
        alignItems: 'center',
        marginTop: 20,
        padding: 20,
        backgroundColor: "#fff",
    },
    buttonContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
    },
    input: {
        marginTop: 20,
    },
    choseNumberTitle: {
        fontSize: 17,
        fontFamily: 'Lato-Regular',
    }
  });


const StartGameScreen = ({setUserNumber}) => {

    const[value, setValue] = useState("");
    const[confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState('');

    const handlerInputNumber = (number) => {
        setValue(number.replace(/[^0-9]/g, ''));
    };



    const resetInput = ()=> {
        setValue(0);
        setConfirmed(false);
    };



    const confirmInput = () => {
        const choseNumber = Number(value);

        if(choseNumber === NaN || choseNumber <= 0  || choseNumber > 99) {return}

        setConfirmed(true);
        setSelectedNumber(choseNumber);
        setValue('');
        
    };



    const confirmedOutput = confirmed ?
        <Card style={styles.gameContainer}> 
            <Text style={styles.choseNumberTitle}>Numero elegido</Text>
            <NumberContainer number={selectedNumber} />
            <Button 
            title="Empezar Juego"
            color={colors.primary}
            onPress={()=>setUserNumber(selectedNumber)}
            />
        </Card> 
    : null;





  return (
    <TouchableWithoutFeedback onPress={() =>{
        Keyboard.dismiss();
    }}>
        <View style={styles.bodyContainer}>
            <Text style={styles.title}>Comienza el juego</Text>
            <Card style={styles.gameContainer}>
                <View>
                    <Text style={styles.choseNumberTitle}>Elija un numero</Text>
                    <Input style={styles.input}
                        keyboardType="numeric" 
                        maxLength={2}
                        blurOnSubmit
                        value={value}
                        onChangeText={handlerInputNumber} 
                        autoCorrect={false}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button  
                    color={colors.red} 
                    title="Limpiar" 
                    onPress={resetInput}/>
                    <Button 
                     color={colors.primary} 
                     title="Confirmar"
                     onPress={confirmInput}
                     />
                </View>
            </Card>
            {confirmedOutput}
        </View>
    </TouchableWithoutFeedback>
  )
}

export default StartGameScreen