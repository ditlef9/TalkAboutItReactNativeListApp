
import { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput, FlatList } from 'react-native';

import KeywordInput from './components/KeywordInput';
import KeywordItem from './components/KeywordItem';

export default function App() {

  const [keywordsArray, setKeywordsArray] = useState([]);  /* Array of keywords */

  /*- Array list ----------------------------------------------------------------------- */
  const addKeywordHandler = keywordTitle => {
    setKeywordsArray(currentKeywords => [
      ...currentKeywords, 
      { id: Math.random().toString(), value: keywordTitle }
    ]); /* Takes old arrays and puts into new array */
  };

  /*- Delete keyword handler ------------------------------------------------------------ */
  const deleteKeywordHandler = keywordId => {
    setKeywordsArray(currentKeywords => { return currentKeywords.filter((keyword) => keyword.id !== keywordId); })
  
  }; // deleteKeywordHandler


  /*- Main ------------------------------------------------------------------------------ */
  return (
    <View style={styles.container}>

      { /* Header */ }
      <KeywordInput onAddKeyword={addKeywordHandler} />

      { /* Output array of keywords */ }
      <FlatList 
      keyExtractor={(item, index) => item.id}
      data={keywordsArray} renderItem={itemData => <KeywordItem title={itemData.item.value} id={itemData.item.id} onDelete={deleteKeywordHandler} /> }
      />
    </View>
  );
}

/*- Stylesheet ------------------------------------------------------------------------ */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50
  },



  main: {
    textAlign: 'right'
  },
  arrayItem: {
    padding: 10,
    marginBottom: 2,
    width: "100%", 
    backgroundColor: '#ffffff',
    borderColor: '#dadde1',
    borderWidth: 1
  }
});
