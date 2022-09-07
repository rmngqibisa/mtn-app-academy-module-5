import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{color: "#fff", fontSize: 16}}>To share a photo with your friend, just press the button below!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF14A8',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
