import React, {useState, useEffect} from 'react';
import {View, Text, Button} from 'react-native';

const Screen2 = props => {
  const {navigation} = props;
  const [counter, setCounter] = useState(0);
  const [isCounterPaused, setIsCounterPaused] = useState(false);
  const [prevCounterValue, setPrevCounterValue] = useState(0);

  useEffect(() => {
    let interval;

    if (!isCounterPaused || props.route.params !== undefined) {
      interval = setInterval(() => {
        setCounter(prevCounter => prevCounter + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isCounterPaused,prevCounterValue]);

  const handleNavigation = () => {
    setPrevCounterValue(counter);
    setIsCounterPaused(true);
    navigation.navigate('Screen3');
  };

  const handleGoBack = () => {
    setIsCounterPaused(false);
    setCounter(prevCounterValue);
    navigation.navigate('Screen1');
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Screen 2</Text>
      <Text>Counter: {counter}</Text>
      <Button title="Go to Screen 3" onPress={handleNavigation} />
      <Button title="Go back to Screen 1" onPress={handleGoBack} />
    </View>
  );
};

export default Screen2;
