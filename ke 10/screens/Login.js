import React from 'react';
import { StyleSheet, View, ScrollView, Image, Text, TextInput, TouchableOpacity, Alert
} from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems:'center',
    justifyContent: 'center'
  },

  inputView:{

    width: 200,
    backgroundColor:"#F0FFFF",
    borderRadius:50,
    height:50,
    marginBottom:40,
    justifyContent:"center",
    padding: 5,
    marginRight:40,
    marginLeft:40,
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

const LoginScreen = ({ navigation }) => {
  const [email, Setemail]= React.useState('');
  const [password, Setpassword]= React.useState('');
  const AuthLogin = async () => {
    const response = await fetch ("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA13qvo_ocSu7YthSDbYwXOXSFa-avsDyI", {
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
      await navigation.navigate('Tab')
  } else {
      Alert.alert ('An Error Occured!', resData.error.message, [{
          text: 'Okay'
      }])
  }
  }

  // const handlerLogin = () => {
  //   navigation.navigate('Tab');
  // };

  return (

    
      <View style={styles.container}>
        <Text style={{marginBottom: 40, textAlign: "center", color: "#fff", fontSize: 30}}>Login </Text>
  
        <View>
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
          <TouchableOpacity
            style={styles.loginbutton}
            onPress={AuthLogin}
          >
            <Text style={{ 
              color:"white",
               }}>Login</Text>
          </TouchableOpacity>

          <View>

          <TouchableOpacity
            onPress={() => navigation.navigate('Signup')}
          >
            <Text style={{ color: "white", textAlign: "center"}}>Sign Up</Text>
          </TouchableOpacity>
      </View>
        </View>
      </View>
   
  );
};


export default LoginScreen;
