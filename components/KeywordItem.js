import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const KeywordItem = props => {
    return (
        <View>
        <Text style={styles.arrayItem}>{props.title}</Text>
       </View>
    )
}

const styles = StyleSheet.create({
    arrayItem: {
      padding: 10,
      marginBottom: 2,
      width: "100%", 
      backgroundColor: '#ffffff',
      borderColor: '#dadde1',
      borderWidth: 1
    }
});


export default KeywordItem;