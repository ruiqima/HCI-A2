import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Alert, Button } from 'react-native';
import Header from './Header';
import ListItem from './ListItem';
import AddItem from './AddItem';
import 'react-native-get-random-values';
import { nanoid } from 'nanoid'
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const HomeScreen = ({navigation}) => {
  console.log(nanoid())

  const [items, setItems] = useState([
    { id: nanoid(), text: 'Milk' },
    { id: nanoid(), text: 'Eggs' },
    { id: nanoid(), text: 'Bread' },
    { id: nanoid(), text: 'Juice' },

  ])

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id)
    });
  }

  const addItem = (text) => {
    if (!text) {
      Alert.alert('Error', 'Please enter an item', [{ text: 'OK' }])
    } else {
      setItems(prevItems => {
        return [{ id: nanoid(), text }, ...prevItems]
      })
    }

  }

  return (
      <View style={styles.container}>
        <Header />
        <AddItem addItem={addItem} />
        <FlatList
          data={items}
          renderItem={({ item }) =>
            <ListItem item={item} deleteItem={deleteItem} navigation = {navigation}/>
          }
        />
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

})

export default HomeScreen;