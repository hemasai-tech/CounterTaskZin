import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

const Screen3 = ({ navigation }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleNavigation = () => {
    setCounter(0);
    navigation.navigate('Screen2',{
      screen:'screen3'
    });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Screen 3</Text>
      <Text>Counter: {counter}</Text>
      <Button title="Go back to Screen 2" onPress={handleNavigation} />
      <Button title="Go back to Screen 1" onPress={() => navigation.navigate('Screen1')} />
    </View>
  );
};

export default Screen3;