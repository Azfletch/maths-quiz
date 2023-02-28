import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <View style={{ marginTop: 30 }}>
      <Image
        source={{ uri: 'https://freesvg.org/img/Math-Girl-.png' }}
        style={{ height: 370, width: '100%', resizeMode: 'contain' }}
      />

      <View style={{ padding: 10 }}>
        <Text style={{ textAlign: 'center', color: '#d257d2', fontWeight: '600', fontSize: 20 }}>QUIZ RULES</Text>
        <View style={{ padding: 10, borderRadius: 6, backgroundColor: '#f2f6a2', marginTop: 15 }}>
          <Text>1. Answer 10 Questions</Text>
          <Text>2. Your Score Will be displayed when you finish!</Text>
        </View>
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})