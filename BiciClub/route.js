import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const RouteScreen = () => {
  // Aqui você pode definir as coordenadas da rota escolhida pelo usuário
  const routeCoordinates = [
    { latitude: -1.449967, longitude: -48.477797 },
    // Adicione as coordenadas restantes da rota aqui
  ];

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={-1.449967, -48.477797}>
        {routeCoordinates.map((coordinate, index) => (
          <Marker key={index} coordinate={coordinate} />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default RouteScreen;
