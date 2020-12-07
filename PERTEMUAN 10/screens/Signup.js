import React from 'react';
import { StyleSheet, View, Image, ScrollView, Text, TouchableOpacity, TextInput, Alert
} from 'react-native';
import Constants from 'expo-constants';


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
  const [email, Setemail]= React.useState('');
  const [password, Setpassword]= React.useState('');
  // const [confirmPass, setconfirmpass] = React.useState('');
  const AuthSigup = async () => {
    const response = await fetch ("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA13qvo_ocSu7YthSDbYwXOXSFa-avsDyI", {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true
        })
    })
    const resData = await response.json()
    if (response.ok){
      await navigation.navigate('Login')
  } else {
      Alert.alert ('An Error Occured!', resData.error.message, [{
          text: 'Okay'
      }])
  }
  }

  // const app = () => {
  //     navigation.navigate('Tab');
  // };

  return (
    <ScrollView style={styles.container}>
      <View >

        <View style={{alignItems: 'center', marginTop: 50}} >
          <Text style={{ fontSize: 20, marginTop: 30, color: '#FFF'}}>Create Akun</Text>
          <TextInput style={styles.inputView}
            value={email}
            // onChangeText={setEmail}
            placeholder="Email"
            onChangeText= {(text) => {
              Setemail(text)
          }}
           
          />
        <TextInput style={styles.inputView}
            value={password}
            // onChangeText={setPassword}
            placeholder="Password"
            onChangeText= {(text) => {
              Setpassword(text)
          }}
          secureTextEntry
        
          />
        <TextInput style={styles.inputView}
            value={password}
            // onChangeText={setPassword}
            placeholder="Password"
            onChangeText= {(text) => {
              Setpassword(text)
          }}
          secureTextEntry
          
          />
        </View>

        <TouchableOpacity
            style={styles.loginbutton}
            onPress={AuthSigup}
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
