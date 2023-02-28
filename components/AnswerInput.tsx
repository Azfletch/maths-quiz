import React, { useState, useEffect } from 'react'
import { SafeAreaView, TextInput, Pressable, Text } from 'react-native'

const AnswerInput = () => {
  const [answer, setAnswer] = useState('')

  useEffect(() => {
    setAnswer(answer)
  })

  return (
    <SafeAreaView>
      <TextInput
        style={{ height: 40, margin: 12, borderWidth: 1, padding: 10, backgroundColor: 'white' }}
        onChangeText={setAnswer}
        value={answer}
        placeholder="Type your answer here"
        keyboardType="numeric"
      />
      <Pressable
        style={{ backgroundColor: '#d057d2', padding: 15, borderRadius: 15, marginLeft: 'auto', marginRight: 'auto', marginTop: 15 }}
        onPress={() => {}}
      >
        <Text style={{ color: 'white', fontWeight: '600', fontSize: 20 }}>SUBMIT</Text>
      </Pressable>
    </SafeAreaView>
  )
}

export default AnswerInput