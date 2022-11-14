import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import RentalLookPage from './page/VehicleStatus'
import RenterLookPage from './page/VehicleSelect'

export default function App() {
  return (
    <View style={styles.container}>
      <RenterLookPage/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DFF2FD',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
