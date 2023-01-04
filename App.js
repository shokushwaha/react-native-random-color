import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Randomcolor from './src/screens/Randomcolor';

export default function App() {
  return (
    <View style={styles.container}>
      <Randomcolor />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

    backgroundColor: "azure",
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: 100
  },
});
