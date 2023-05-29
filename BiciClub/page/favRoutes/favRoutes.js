import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const RouteItem = ({ route, onNavigate, onRemove }) => (
  <View style={styles.routeItemContainer}>
    <Text style={styles.routeItemTitle}>{route.title}</Text>
    <View>
      <Text style={styles.routeItemText}>Origem: {route.origin}</Text>
      <Text style={styles.routeItemText}>Destino: {route.destination}</Text>
      <Text style={styles.routeItemText}>Distância: {route.distance} km</Text>
    </View>
    <View style={styles.routeItemButtonsContainer}>
      <TouchableOpacity onPress={() => onNavigate(route)} style={styles.routeItemButton}>
        <Text style={styles.routeItemButtonText}>Navegar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onRemove(route)} style={styles.routeItemButton}>
        <Text style={styles.routeItemButtonText}>Remover</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const FavoriteRoutesScreen = () => {
  const favoriteRoutes = [
    { title: 'Rota 1', origin: 'Casa', destination: 'Trabalho', distance: 5 },
    { title: 'Rota 2', origin: 'Parque', destination: 'Shopping', distance: 3 },
    { title: 'Rota 3', origin: 'Escola', destination: 'Praia', distance: 10 },
  ];

  const handleBackPress = () => {
    // Lógica para voltar para a tela anterior
  };

  const handleRouteNavigate = (route) => {
    // Lógica para navegar para a rota selecionada
  };

  const handleRouteRemove = (route) => {
    // Lógica para remover a rota favorita
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <Text style={styles.backButtonText}>{'<  Rotas Favoritas'}</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.totalText}>Total de Rotas Favoritas: {favoriteRoutes.length}</Text>
      <FlatList
        data={favoriteRoutes}
        renderItem={({ item }) => (
          <RouteItem
            route={item}
            onNavigate={handleRouteNavigate}
            onRemove={handleRouteRemove}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.routeList}
      />
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
  backButton: {
    marginBottom: 10,
    textAlign: 'center',
  },
  backButtonText: {
    fontSize: 22,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 5,
  },
  totalText: {
    marginTop: 15,
    marginBottom: 15,
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  routeList: {
    backgroundColor: '#FFD174',
    paddingTop: 20,
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
  routeItemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  routeItemText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  routeItemButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  routeItemButton: {
    backgroundColor: '#FFD174',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  routeItemButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default FavoriteRoutesScreen;