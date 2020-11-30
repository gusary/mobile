import React from 'react';
import { StyleSheet, View, Image, ScrollView, Text, TouchableOpacity, TextInput, 
} from 'react-native';
import Constants from 'expo-constants';
import {block} from 'react-native-reanimated';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  inputView:{
    width: 200,
    backgroundColor:"#F0FFFF",
    borderRadius:50,
    height:50,
    justifyContent:"center",
    padding: 10,
    marginRight:40,
    marginLeft:40,
    marginTop: 30
  },
  loginbutton:{
    backgroundColor:"black",
    borderRadius: 20,
    backgroundColor:  "#8B0000",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent:"center",
    marginTop: 40,
    marginBottom: 10,
    marginRight: 40,
    marginLeft: 40,
  },


});

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPass, setConfirmPass] = React.useState('');

  const app = () => {
      navigation.navigate('Tab');
  };

  return (
    <ScrollView style={styles.container}>
      <View >

        <View style={{alignItems: 'center', marginTop: 50}} >
          <Text style={{ fontSize: 20, marginTop: 30, color: '#FFF'}}>Create Akun</Text>
          <TextInput style={styles.inputView}
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
           
          />
        <TextInput style={styles.inputView}
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
        
          />
        <TextInput style={styles.inputView}
            value={confirmPass}
            onChangeText={setConfirmPass}
            placeholder="Password"
          
          />
        
        </View>

        <TouchableOpacity
            style={styles.loginbutton}
            onPress={app}
          >
            <Text style={{ 
              color:"#fff"
               }}>Sign up</Text>
          </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SignupScreen;
