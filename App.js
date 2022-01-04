import { useState } from 'react'
import React from 'react'
import { Text, View, Button } from 'react-native'

export default function App() {
  const [counter, setCounter] = useState(0)

  const increment = () => {
    setCounter(counter + 1)
  }
  const decrement = () => {
    setCounter(counter - 1)
  }

  return (
    <View
      style={{
        flex: 1,
        marginBottom: 6,
        justifyContent: 'center',
        backgroundColor: 'pink',
        alignItems: 'center',
      }}
    >
      <Text>Counter App</Text>
      <Text testID="myValue">{counter}</Text>

      <Button
        testID="myButton"
        title="Increment"
        onPress={() => increment()}
        disabled={counter === 10}
      />

      <Button
        testID="myButton2"
        title="decrement"
        onPress={() => decrement()}
        disabled={counter === 0}
      />
    </View>
  )
}
