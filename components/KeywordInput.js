import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

/* 2:30 */

const KeywordInput = props => {
    const [enteredKeyword, setEnteredKeyword] = useState(''); /* Bind TextInput to the variables */


    const keywordInputHandler = (enteredText) => {
        setEnteredKeyword(enteredText)
    }


    return (
        <View style={styles.header}>
        <TextInput placeholder="What do you want to talk about?" style={styles.textInput} onChangeText={keywordInputHandler} value={enteredKeyword} />
        <Button title="Add!" onPress={() => props.onAddKeyword(enteredKeyword)} />
      </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10
    },
    textInput: {
    padding: 4,
    paddingRight: 6,
    paddingLeft: 6,
    marginRight: 10,
    backgroundColor: '#ffffff',
    width: '80%',
    borderColor: '#dadde1',
    borderWidth: 1
    },
});


export default KeywordInput;

