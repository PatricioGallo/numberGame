import React from 'react'
import { StyleSheet, View , TextInput} from 'react-native';
import {colors} from '../Constants/colors';

const styles = StyleSheet.create({
    input: {
        minWidth: '30%',
        borderBottomWidth: 1,
        borderBottomColor: colors.primary,
        textAlign: 'center',
        fontSize: 30,
        paddingBottom: 10,
    }
});

const Input = ({style,...props}) => {
  return (
    <TextInput {...props} style={{...styles.input,...style}}/>
  )
}

export default Input