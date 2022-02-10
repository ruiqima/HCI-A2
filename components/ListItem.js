import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ListItem = ({item, deleteItem, navigation}) => {

  const _navigateToDetail = (itemText) => {
    navigation.navigate('Detail', {item: itemText})
  }
  
  return (
    <TouchableOpacity style = {styles.listItem} onPress = {_navigateToDetail.bind(this, item.text)}>
        <View style = {styles.listItemView}>
            <Text style = {styles.listItemText}>{item.text}</Text>
            <Icon name = 'remove' size = {20} color = 'firebrick'
            onPress = {() => deleteItem(item.id)}/>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    listItem:{
        padding: 15,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderColor: '#eee',
    },
    listItemView:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center'
    },
    listItemText:{
        flexDirection: 'row',
        fontSize: 18,
    }
})

export default ListItem;