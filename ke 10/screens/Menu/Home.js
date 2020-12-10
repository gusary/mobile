import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, View, Text, Image
} from 'react-native';



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: 'center'
  },
 
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom:50,
  },
});

const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>
      <Image style={{height:200, width:370, }} source={require('../../screens/lostvape.jpg')} />
      <View>
      
        <Text style={{

          color: "white",
          marginTop:30,
          textAlign:"center"
          }}>
          Selamat Datang di ARY VAPESTORE
        </Text>

        <Text style={{

          color: "white",
        marginTop:30,
        textAlign:"center"
        
        }}>
          DIVACE, ATOMIZERS, ELIQUID dan KEBUTUHAN VAPE
      </Text>
      </View>
      


    <View >
          <View style={{ 
            alignItems: 'center',
             }}>
            <MaterialCommunityIcons
            
            />
            <Text style={{ 
              color: "red",
              fontWeight:"bold",
              fontSize: 20,
              marginTop: 50}}  
              onPress={() => navigation.navigate('Details')}> CLICK UNTUK MELIHAT BARANG READY
             </Text>

             <Text style={{ 
              color: "white",
              fontWeight:"bold",
              fontSize: 15,
              marginTop: 100}} 
               
              onPress={() => navigation.navigate('daftar')}> CLICK UNTUK BERGABUNG MEMBER
             </Text>
          </View>

        
        </View>
 
  </View>
);

export default HomeScreen;
