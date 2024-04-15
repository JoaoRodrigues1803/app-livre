import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Image } from 'expo-image';
// import Avatar from './assets/avatar.jpg';
import Foto from './assets/pp.png';

export default function App() {

  return (
    <View style={estilo.container}>
      <Image
        source={Foto}
        style={estilo.avatar}
      />
      <Text style={estilo.nome}>
        @Peter_Parker
      </Text>
      <View style={estilo.View}>
        <View style={estilo.vDentro}>
          <Text>
            20
          </Text>
          <Text>
            Seguindo 
          </Text>
        </View>
        <View style={estilo.vDentro}>
          <Text>
            20
          </Text>
          <Text>
            Seguidores 
          </Text>
        </View>
        <View style={estilo.vDentro}>
          <Text>
            20
          </Text>
          <Text>
            Curtidas 
          </Text>
        </View>
      </View>
      <View style={estilo.bottoes}>
        <Button
          title='Editar perfil'
        />
        <Button
          title='Editar perfil'
        />
      </View>
    </View>
  );
}

const estilo = StyleSheet.create({
  container:{
    backgroundColor: 'rgba(255,255,255,255)', 
    flex:1, 
    justifyContent:'center', 
    alignItems:'center'
  },
  View:{
    flexDirection:'row'
  },
vDentro:{
  alignItems:'center',
  margin:15
},
  avatar:{
    width:100,
    height:100,
    borderRadius:50,
    borderWidth: 5,
    borderTopColor: "#000",
    /// borderBottomColor:"#ff0",   
  },
  nome:{
    fontSize: 24,
    marginTop: 30
  },
  sobre:{
    fontSize: 18,
    marginHorizontal: 25,
    textAlign:'justify',
    padding: 20,
    backgroundColor: "#55555538",
    width: 350,
    marginTop:30,
    borderRadius:10
  },
  seguindores:{
    marginHorizontal: 5,
    alignItems: 'center',
  },
  bottoes:{
    margin:15,
    width: '70%',
    justifyContent:'space-around',
    flexDirection:'row'
  },
}); 

