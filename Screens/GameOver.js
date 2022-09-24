import React from 'react';
import { View , Button, Text , StyleSheet , Image} from 'react-native';
import Card from '../Components/Card';
import gameover from '../media/imagenes/gameover.webp';
import { colors } from '../Constants/colors';

styles = StyleSheet.create({
    containerGameOver: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardContainer: {
        width: '80%',
        display: 'flex',
        alignItems: 'center',
        marginTop: 20,
        padding: 20,
        backgroundColor: "#fff",
    },
    imagenes:{
        width: '80%',
        height: '50%',
    },
    text: {
        fontSize: 17,
        color: colors.dark,
        marginTop: 10,
        fontFamily: 'Lato-Regular',
    },
    button:{
        marginTop: 20,
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 20
    },
    buttonContainer: {
        marginTop: 40,
    }
});

const GameOver = ({rounds, userNumber , returnGame}) => {
  return (
    <View style={styles.containerGameOver}>
        <Card style={styles.cardContainer}>
            <Image style={styles.imagenes} source={gameover}/>
            <Text style={styles.title}>Juego Finalizado</Text>
            <Text style={styles.text}>Cantidad de intentos: {rounds}</Text>
            <Text style={styles.text}>Numero seleccionado: {userNumber}</Text>
            <View style={styles.buttonContainer}>
                <Button 
                title="Reiniciar juego"
                onPress={returnGame}
                color={colors.primary}
                />
            </View>
        </Card>
    </View>
  )
}

export default GameOver