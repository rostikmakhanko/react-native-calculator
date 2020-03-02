import React, {useRef, useState} from 'react';
import {Button, ScrollView, Text, View} from 'react-native';
console.disableYellowBox = true;
//Component
//Elements
//Instance

const App = () => {
  // const myInstance = React.createRef<ScrollView>();
  const [buttonClickCount, setButtonClickCount] = useState('0');
  const [date] = useState(new Date());
  const myRef = useRef<ScrollView>(null);
  const onButtonPress = () => {
    setButtonClickCount(buttonClickCount + 2)
  };

  return (
    <View style={{paddingTop: 100}}>
      <Button title="Scroll to the end" onPress={onButtonPress} />
      <Text>
        {0.05 + 0.01}
      </Text>
      <Text>{myRef.current + ''}</Text>
      <ScrollView ref={myRef}>
        <Text>
          {Array.from(new Array(4000))
            .map(() => 'x')
            .join('')}
        </Text>
      </ScrollView>
    </View>
  );
};

export default App;
