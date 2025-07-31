import React, { useEffect } from 'react';
import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Text,
  Button,
} from 'react-native';
import CleverTap from 'clevertap-react-native';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  CleverTap.setDebugLevel(3);

  
  const handleEvent = () => {
    CleverTap.recordEvent("Homescreen viewed","");
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text>Welcome to CleverTap Integration</Text>
      <Button title="Send Event" onPress={handleEvent} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
