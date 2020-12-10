import React, {useState} from 'react';
import {
  StyleSheet, Text, View, Image, TextInput, TouchableOpacity
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import firebase from '../firebase/index'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems:'center',
    justifyContent: 'center'
  },
  inputView:{
    width: 300,
    backgroundColor:"#F0FFFF",
    borderRadius:50,
    height:50,
    marginBottom:40,
    justifyContent:"center",
    padding: 5,
    marginRight:50,
    marginLeft:50,
  },

});

const daftarScreen = ({ navigation }) => {
  const [Nama, setNama] = React.useState('');
  const [Alamat, setAlamat] = React.useState('');
  const [Tanggal, setTanggal] = React.useState('');
  const app = () => {
    navigation.navigate('BotTab');
  };

  const [state, setState] = useState ({
    name: "",
    alamat: "",
    tanggal: ""
})

const handleChangeText = (name, value) => {
    setState ({ ...state, [name]: value})
}

const savecomment = async () => {
    if (state.name === '') {
        alert ('Please provide a name')
    }
    else {
        await firebase.db.collection('users').add({
            name: state.name,
            alamat: state.alamat,
            tanggal: state.tanggal
        })
        alert('Seved!')
    }
}
return (
<View style={styles.container}>
<Image style={{width: 400, height: 200, marginBottom: 30}} source={require('../../screens/divace.jpg')}/>
        <Text style={{marginBottom: 40, textAlign: "center", color: "#fff", fontSize: 30}}>Formulir Member</Text>
  
        <View>
          <TextInput style={styles.inputView}
            // value={Nama}
            // onChangeText={setNama}
            placeholder="Nama"
            onChangeText={(value) => handleChangeText ("name", value)}
          />
          <TextInput style={styles.inputView}
            // value={Alamat}
            // onChangeText={setAlamat}
            placeholder="Alamat"
            onChangeText={(value) => handleChangeText ("alamat", value)}
          />
          <TextInput style={styles.inputView}
            // value={Tanggal}
            // onChangeText={setTanggal}
            placeholder="Tanggal - Bulan - Tahun"
            onChangeText={(value) => handleChangeText ("tanggal", value)}
          />
        </View> 
        <TouchableOpacity onPress={savecomment} style={{
            width: 150, backgroundColor: '#000000', padding: 10,
            alignItems: 'center', justifyContent: 'center', borderRadius: 40, marginTop: 10
            }}>
            <Text style={{ textAlign: 'center', color: '#fff', fontSize: 16 }}>Submit</Text>
        </TouchableOpacity>  
</View>

);
}
export default daftarScreen;