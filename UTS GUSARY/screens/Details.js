import React from 'react';
import {
  StyleSheet, Text, View, Image,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import b1 from '../assets/image/b1.jpg';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",  
  },
});

const DetailsScreen = () => (
  <View style={styles.container}>
    <ScrollView>
      

      <View style={{ padding: 24 }}>
        <Text style={{textAlign:"center"}}> READY BARANG </Text>
      </View>
      <Text style={{
      color: "red",
      marginTop:30,
      textAlign:"center"
      }}>MOD</Text>
      <View>
      <Image style={{alignItems:"center", width: 400, height: 200}} source={require('./../screens/divace.jpg')}/>
      </View>
      <Text style={{
      color: "red",
      marginTop:30,
      textAlign:"center"
      }}>POD</Text>
      <View>
      <Image style={{alignItems:"center", width: 400, height: 200}} source={require('./../screens/pod.jpg')}/>
      </View>
      <Text style={{
      color: "red",
      marginTop:30,
      textAlign:"center"
      }}>E-LIQUID</Text>
      <View>
      <Image style={{alignItems:"center", width: 400, height: 200}} source={require('./../screens/trippe.jpg')}/>
      </View>
      <View>
      <Image style={{alignItems:"center", width: 400, height: 200}} source={require('./../screens/rispek.jpg')}/>
      </View>
      </ScrollView>
  </View>
);
export default DetailsScreen;
