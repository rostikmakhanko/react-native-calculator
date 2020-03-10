import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface MyButtonProps {
  value: string;
  positionInRow: number;
  onPress: (buttonSymbol: string) => void;
}

const MyButton: React.FC<MyButtonProps> = props => {
  return (
    <TouchableOpacity
      style={
        props.positionInRow < 3
          ? styles.buttonViewGrey
          : styles.buttonViewOrange
      }
      onPress={() => props.onPress(props.value)}>
      <Text style={styles.buttonText}>{props.value}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
});

export default MyButton;
