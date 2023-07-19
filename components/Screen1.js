import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

const Screen1 = ({ navigation }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Screen 1</Text>
      <Text>Counter: {counter}</Text>
      <Button title="Go to Screen 2" onPress={() => navigation.navigate('Screen2')} />
    </View>
  );
};

export default Screen1;
