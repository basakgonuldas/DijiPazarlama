import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import 'expo-dev-client';
import Constants from 'expo-constants';

export default function App() {
  return (
    <View style={styles.container}>
      <WebView
        style={styles.container}
        source={{ uri: 'https://dijipazarlama.com.tr/' }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
