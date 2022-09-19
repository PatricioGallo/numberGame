import React from 'react'
import { StyleSheet , View , Text } from 'react-native'
import { colors } from '../Constants/colors';

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: colors.primary,
        padding: 10,
        marginVertical: 20,
        borderRadius:5,
    },
    text: {
        fontSize: '22px',
        fontWeight: 'bold',
    }
});


const NumberContainer = ({number}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>{number}</Text>
    </View>
  )
}

export default NumberContainer