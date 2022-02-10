import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Alert, Image } from 'react-native';
import 'react-native-get-random-values';
import { render } from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';

const DetailScreen = ({ navigation, route }) => {

  let my_uri;

  if(route.params.item == 'Milk'){
    my_uri = 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Glass_of_Milk_%2833657535532%29.jpg'
  }else if(route.params.item == 'Eggs'){
    my_uri = 'https://upload.wikimedia.org/wikipedia/en/thumb/5/58/Instagram_egg.jpg/220px-Instagram_egg.jpg'
  }else if(route.params.item == 'Bread'){
    my_uri = 'https://upload.wikimedia.org/wikipedia/commons/3/33/Fresh_made_bread_05.jpg'
  }else if (route.params.item == 'Juice'){
    my_uri = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Orange_juice_1.jpg/1200px-Orange_juice_1.jpg'
  }else{
    my_uri = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/925px-Unknown_person.jpg'
  }
  
  

  let my_image = <Image
    source={{ uri: my_uri }}
    style={styles.image}
  />

  return (
    <View style={styles.container}>
      {my_image}
      <Text style={styles.text}>{route.params.item}</Text>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    flexDirection: 'column',
    alignItems: 'center'
  },
  image: {
    width: 200, height: 200, borderRadius: 100 / 2
  },
  text: {
    fontSize: 36,
    paddingTop: 40
  }

})

export default DetailScreen;