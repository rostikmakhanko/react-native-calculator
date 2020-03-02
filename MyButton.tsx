import React, {useRef, useState} from 'react';
import {connect} from 'remx';
import {store} from './stores/store';

import {Text, TouchableOpacity} from 'react-native';

interface MyButtonProps {
  key: string;
  value: string;
  positionInRow: number;
}

const MyButton: React.FC<MyButtonProps> = props => {
  const onPress = () => {
    if (props.value === 'AC') {
      store.setCurrentValue(0);
    } else if (props.value === '+/-') {
      store.reelse
    } if (props.value >= '0' && props.value <= '9') {
      if (store.getCurrentValue() == '0') store.setCurrentValue(props.value);
      else store.setCurrentValue(store.getCurrentValue() + props.value);
    }
  };

  return (
    <TouchableOpacity
      style={
        props.positionInRow < 3
          ? styles.buttonViewGrey
          : styles.buttonViewOrange
      }
      onPress={onPress}>
      <Text style={styles.buttonText}>{props.value}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonViewGrey: {
    height: '100%',
    backgroundColor: 'grey',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
  },
  buttonViewOrange: {
    height: '100%',
    backgroundColor: '#db8937',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
  },
  buttonText: {color: 'white', fontSize: 35},
};

export default MyButton;
