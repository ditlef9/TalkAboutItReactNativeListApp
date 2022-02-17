import React from 'react';
import { View, Text, StyleSheet, Touchable, TouchableOpacity, Pressable } from 'react-native';

/*- Function Keyword Item ------------------------------------------------------------- */
const KeywordItem = props => {
    return (
        <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.arrayItem}>
                <Text>{props.title}</Text>
            </View>
       </TouchableOpacity>
    )
}

/*- Stylesheet ------------------------------------------------------------------------ */
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