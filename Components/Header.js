import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    headerContainer: {
      width: '100%',
      height: 100,
      backgroundColor: '#77966D',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title:{
        fontSize: 19,
        color: 'white',
        fontWeight: 'bold',
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