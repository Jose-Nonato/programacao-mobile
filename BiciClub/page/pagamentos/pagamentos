import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function App() {
  return (
  <View>
    <View style={styles.titulo}>     
        <TouchableOpacity>
          <AntDesign name="arrowleft" size={35} color="black"  paddingTop={30} paddingLeft={5}/>
        </TouchableOpacity>
        <Text style={styles.cabeçalho}>
        Formas de pagamento
        </Text>
      <StatusBar style="auto" />
    </View>

    <View style={styles.lista}>
      <View style={styles.cartão}>
        <Text style={styles.titulo_cartão}>
          Cartão 1
        </Text>
        <Text style={styles.detalhes_cartão}>
        **** **** ****  1234 - Débito
        </Text>
        
        <View style={styles.botões}>
          <TouchableOpacity>
          <View style={styles.container_botões}>
            <Text style={styles.texto_botões}>
              Editar
            </Text>
          </View>
          </TouchableOpacity>

          <TouchableOpacity>
          <View style={styles.container_botões}>
            <Text style={styles.texto_botões}>
              Remover
            </Text>
          </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.cartão}>
        <Text style={styles.titulo_cartão}>
          Cartão 2
        </Text>
        <Text style={styles.detalhes_cartão}>
        **** **** ****  5678 - Crédito
        </Text>
        
        <View style={styles.botões}>
          <TouchableOpacity>
          <View style={styles.container_botões}>
            <Text style={styles.texto_botões}>
              Editar
            </Text>
          </View>
          </TouchableOpacity>

          <TouchableOpacity>
          <View style={styles.container_botões}>
            <Text style={styles.texto_botões}>
              Remover
            </Text>
          </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.cartão}>
        <Text style={styles.titulo_cartão}>
          Cartão 3
        </Text>
        <Text style={styles.detalhes_cartão}>
        **** **** ****  9101 - Crédito
        </Text>
        
        <View style={styles.botões}>
          <TouchableOpacity>
          <View style={styles.container_botões}>
            <Text style={styles.texto_botões}>
              Editar
            </Text>
          </View>
          </TouchableOpacity>

          <TouchableOpacity>
          <View style={styles.container_botões}>
            <Text style={styles.texto_botões}>
              Remover
            </Text>
          </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.pagamentos}>
        <Text style={styles.texto_pagamentos}>
          Pagar com PIX
        </Text>
      </View>
      <View style={styles.pagamentos}>
        <Text style={styles.texto_pagamentos}>
          Adicionar forma de pagamento
        </Text>
      </View>
    </View> 
  </View>
  );
}

const styles = StyleSheet.create({
  titulo: {
    color: '#black',
    backgroundColor: '#FD8D3D',
    borderRadius: 10,
    height: 140,
    alignItems: 'center',
    flexDirection: 'row',
  },
  cabeçalho: {
    fontSize: 30,
    marginTop: 30,
    marginLeft: 0.5,
    paddingLeft: 30,
    fontWeight: 'bold',
  },
  lista: {
    backgroundColor: '#FFD174',
    height: 700,
    marginTop: 110,
    borderRadius: 20
  },
  cartão:{
    backgroundColor: '#FFBB5D',
    height: 120,
    marginTop: 30,
    borderRadius: 20,
    alignItems: 'center',
  },
  titulo_cartão: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10
  },
  detalhes_cartão: {
    justifyContent: 'center',
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold'
  },
  container_botões:{
    backgroundColor: '#FD8D3D',
    width: 150,
    height: 40, 
    marginLeft: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  botões: {
    flexDirection: 'row',
    marginRight: 45
  },
  texto_botões: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  pagamentos: {
    backgroundColor: '#FFBB5D',
    height: 60,
    marginTop: 20,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  texto_pagamentos: {
    fontSize: 22,
    fontWeight:'bold'
  }
}
);
