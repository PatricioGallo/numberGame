import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import {colors} from '../Constants/colors';

const styles = StyleSheet.create({
    headerContainer: {
      width: '100%',
      height: 100,
      backgroundColor: colors.primary,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title:{
        fontSize: 20,
        color: 'white',
        fontFamily: 'Lato-Bold',
        marginTop: 20,
    }
  });
  


const Header = ({title}) => {
  return (
    <View style={styles.headerContainer}>
        <Text style={styles.title}>{title}</Text>
    </View>
  )
}

export default Header