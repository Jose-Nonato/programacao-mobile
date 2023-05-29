import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.caixa}>
      <View style={styles.caixaLaranja}>
        
        <View style={styles.caixaPri}>
          <Text style={styles.textoLocal}>
          Você está em Cesupa- Argo!
          </Text>
          <TouchableOpacity>
            <Image style={styles.fotoPerfil} source={require('./assets/iconefri.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.caixaPerfil}>
          <TouchableOpacity>
            <Image style={styles.fotoPerfil} source={require('./assets/fotopersona.png')} />
          </TouchableOpacity>
          <Text style={styles.textoNome}>
          Olá, Fulano!
          </Text>
        </View>

        <Text style={styles.paragraph}>
        Para onde quer pedalar?
        </Text>

        <View style={styles.caixaButton}>  
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textoButton}>Encontrar Bike</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.textoButton}>Encontrar Stop</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.textoButton}>Devolver Bike</Text>
          </TouchableOpacity>
        </View>

      </View>
      <Image style={styles.mapa} source={require('./assets/mapaapp.png')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  caixa: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#ecf0f1',
    borderRadius: 0
  },
  mapa: {
    flex: 2,
  },
  caixaLaranja: {
    backgroundColor: '#FD8D3D',
    width: '100%',
    height: '25%',
    justifyContent: 'space-around',
    padding: 12,
  },
  caixaPerfil: {
     flexDirection: 'row',
      //paddingVertical: 5
  },
  caixaPri: {
     flexDirection: 'row',
     justifyContent: 'space-between',
    paddingTop: 30
  },
  caixaButton: {
     flexDirection: 'row',
     justifyContent: 'space-between',
  },
  fotoPerfil: {
    //flexDirection: 'row',
    backgroundColor: 'white',
    width: 40,
    height: 40,
    borderRadius: 50
  },
  paragraph: {
    //margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
  },
  textoLocal: {
    fontSize: 18,
    fontWeight: 'bold',
   
  },
  textoNome: {
    padding:8,
    paddingVertical: 8,
    fontSize: 18,
    fontWeight: 'bold',
  },
  textoButton: {
    alignItems: 'center',
    //width: '99%',
    //height: '90%',
    paddingVertical: 5,
    padding: '5',
    fontSize: 15,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#FFD174',
    borderRadius: 13,
    width: '30%',
    height: '95%',
  }
});
