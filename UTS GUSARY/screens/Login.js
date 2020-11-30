import React from 'react';
import { StyleSheet, View, ScrollView, Image, Text, TextInput, TouchableOpacity,
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
  const [Email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handlerLogin = () => {
    navigation.navigate('Tab');
  };

  return (

    
      <View style={styles.container}>
        <Text style={{marginBottom: 40, textAlign: "center", color: "#fff", fontSize: 30}}>Login </Text>
  
        <View>
          <TextInput style={styles.inputView}
            value={Email}
            onChangeText={setEmail}
            placeholder="Email"
          />
          <TextInput style={styles.inputView}
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
          
            secureTextEntry
          />
          <TouchableOpacity
            style={styles.loginbutton}
            onPress={handlerLogin}
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
