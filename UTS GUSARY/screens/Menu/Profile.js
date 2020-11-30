import React from 'react';
import {
  StyleSheet, View, Text, ScrollView, Image
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },

});

const ProfileScreen = () => (
  <View style={styles.container}>

    <ScrollView>
      <Text style={{
      color: "red",
      marginTop:100,
      textAlign:"center"
      }}>PROFILE GUS ARY</Text>

      <View>
      <Image source={require('../../screens/gusary.jpg')} style={{alignItems:"center", width: 400, height: 200}}/>
      </View>
      <Text style={{
      color: "red",
      marginTop:10,
      textAlign:"center"
      }}>Nama: Ida Bagus Ary Giri Paramita</Text>
      <Text style={{
      color: "red",
      marginTop:10,
      textAlign:"center"
      }}>Nim: 1801010003</Text>
      <Text style={{
      color: "red",
      marginTop:10,
      textAlign:"center"
      }}>Prodi: Sistem Informasi</Text>
      <Text style={{
      color: "red",
      marginTop:10,
      textAlign:"center"
      }}>IG: gus_aryidabagus</Text>
      <Text style={{
      color: "red",
      marginTop:10,
      textAlign:"center"
      }}>Gmail: gusary296@gmail.com</Text>
      
    </ScrollView>

  </View>
  


);

export default ProfileScreen;
