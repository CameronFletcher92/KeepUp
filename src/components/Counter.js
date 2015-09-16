import React, { Component, PropTypes, View, Text, StyleSheet, Button } from 'react-native'

class Counter extends Component {
  render() {
    const { increment, incrementIfOdd, incrementAsync, decrement, count, label } = this.props
    return (
      <View style={styles.container}>
        <Text> Count: {count} </Text>
        <View style={styles.buttonRow}>
          <Text style={styles.button} onPress={() => increment(1)}>+</Text>
          <Text style={styles.button} onPress={() => decrement(1)}>-</Text>
          <Text style={styles.button} onPress={() => incrementIfOdd()}>+ if odd</Text>
          <Text style={styles.button} onPress={() => incrementAsync()}>+ async</Text>
        </View>
      </View>
    )
  }
}

Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired
}

var styles = StyleSheet.create({
  button: {
    margin: 10
  },
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'stretch'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
})

export default Counter
