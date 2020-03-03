import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {connect} from 'remx';
import {store} from './stores/store';
import MyButton from './MyButton';
import {onButtonPress} from './stores/actions';

const buttonLabels = [
  ['AC', '+/-', '%', '÷'],
  ['7', '8', '9', '*'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', ',', '?', '='],
];

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.header}>
        <Text style={styles.currentValue}>{store.getCurrentValue()}</Text>
      </View>
      <View style={styles.allButtons}>
        {buttonLabels.map((buttonsRow, i) => (
          <View style={styles.buttonsRow}>
            {buttonsRow.map((item, j) => {
              return (
                <MyButton
                  onPress={onButtonPress}
                  key={item}
                  value={item}
                  positionInRow={j}
                />
              );
            })}
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#505254',
    flex: 2,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  currentValue: {fontSize: 100, color: 'white', margin: 10},
  allButtons: {flex: 5},
  buttonsRow: {flex: 1, flexDirection: 'row', alignItems: 'center'},
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

function mapStateToProps(ownProps) {
  return {
    currentValue: store.getCurrentValue(),
  };
}

export default connect(mapStateToProps)(App);
