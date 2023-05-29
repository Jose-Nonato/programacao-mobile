import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const RouteItem = ({ route }) => (
  <TouchableOpacity onPress={() => handleRoutePress(route)} style={styles.routeItemContainer}>
    <View>
      <Text style={styles.routeItemText}>Origem: {route.origin}</Text>
      <Text style={styles.routeItemText}>Destino: </Text><Text style={styles.routeItemText2}> {route.destination}</Text>
      <Text style={styles.routeItemText}>Distância: </Text><Text style={styles.routeItemText2}> {route.distance} km</Text>
      <Text style={styles.routeItemText}>Duração: </Text><Text style={styles.routeItemText2}> {route.duration} min</Text>
    </View>
  </TouchableOpacity>
);

const handleRoutePress = (route) => {
  // Lógica de navegação para a tela do mapa com a rota selecionada
};

const HistoryScreen = () => {
  const routes = [
    { origin: 'Casa', destination: 'Trabalho', distance: 5, duration: 20 },
    { origin: 'Parque', destination: 'Shopping', distance: 3, duration: 15 },
    { origin: 'Escola', destination: 'Praia', distance: 10, duration: 30 },
  ];
  
  const averageDuration = Math.round(routes.reduce((total, route) => total + route.duration, 0) / routes.length);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => handleBackPress()} style={styles.backButton}>
          <Text style={styles.backButtonText}>{'<  Histórico de Rotas'}</Text>
        </TouchableOpacity>
      </View>
        <Text style={styles.totalText}>Total de Viagens: <Text style={styles.totalText2}>{routes.length}</Text></Text>
        <Text style={styles.totalText}>Distância Total: {routes.reduce((total, route) => total + route.distance, 0)} km</Text>
        <Text style={styles.totalText}>Duração Média: {averageDuration} min</Text>
        <Text style={styles.title}>Últimas Viagens:</Text>
      <View style={styles.header3}>
        <FlatList
          data={routes}
          renderItem={({ item }) => <RouteItem route={item} />}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.routeList}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    backgroundColor: '#FD8D3D',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: 20,
  },
  header3: {
    backgroundColor: '#FFD174',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: 20,
  },
  backButton: {
    marginBottom: 10,
    textAlign: 'center',
  },
  backButtonText: {
    fontSize: 22,
    color: 'black',
    fontWeight: 'bold',
  },
  totalText: {
    marginBottom: 15,
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  totalText2: {
    fontSize: 18,
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#FD8D3D',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 5,
    paddingBottom: 5,
  },
  routeList: {
    paddingBottom: 20,
  },
  routeItemContainer: {
    backgroundColor: '#FFBB5D',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  routeItemText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  routeItemText2: {
    fontSize: 16,
  },
});

export default HistoryScreen;