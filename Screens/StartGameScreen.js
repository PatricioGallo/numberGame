import React from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const styles = StyleSheet.create({
    bodyContainer: {
      width: '100%',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title:{
        fontSize: 17,
        color: 'black',
        fontWeight: 'bold',
        marginTop: 20,
    },
    gameContainer: {
        width: '80%',
        display: 'flex',
        alignItems: 'center',
        marginTop: 20,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
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
        minWidth: '30%',
        borderBottomWidth: 1,
        borderBottomColor: '#77966D',
        marginTop: 20,
        textAlign: 'center',
        fontSize: 30,
        paddingBottom: 10,
    },
  });


const StartGameScreen = () => {
  return (
    <View style={styles.bodyContainer}>
        <Text style={styles.title}>Comienza el juego</Text>
        <View style={styles.gameContainer}>
            <View>
                <Text>Elija un numero</Text>
                <TextInput style={styles.input}
                keyboardType="numeric" 
                maxLength={2}
                blurOnSubmit
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button  color="#77966D" title="Limpiar"/>
                <Button  color="#77966D" title="Confirmar"/>
            </View>
        </View>
    </View>
  )
}

export default StartGameScreen