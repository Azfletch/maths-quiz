import { Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
  const navigation = useNavigation()

  return (
    <View style={{ marginTop: 30 }}>
      <Image
        source={{ uri: 'https://freesvg.org/img/Math-Girl-.png' }}
        style={{ height: 370, width: '100%', resizeMode: 'contain' }}
      />

      <View style={{ padding: 10 }}>
        <Text style={{ textAlign: 'center', color: '#d257d2', fontWeight: '600', fontSize: 20 }}>QUIZ RULES</Text>
        <View style={{ padding: 10, borderRadius: 6, backgroundColor: '#f2f6a2', marginTop: 15 }}>
          <View style={{ alignItems: 'flex-start' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', margin: 5 }}>
              <Text style={{ color: '#d257d2', fontWeight: '500' }}>•</Text>
              <Text style={{ marginLeft: 5, color: '#d257d2', fontWeight: '500' }}>Each Question will display a 10 frame</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', margin: 5 }}>
              <Text style={{ color: '#d257d2', fontWeight: '500' }}>•</Text>
              <Text style={{ marginLeft: 5, color: '#d257d2', fontWeight: '500' }}>Type Your Answer in the input provided</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', margin: 5 }}>
              <Text style={{ color: '#d257d2', fontWeight: '500' }}>•</Text>
              <Text style={{ marginLeft: 5, color: '#d257d2', fontWeight: '500' }}>Answer all 5 questions to see your score!</Text>
            </View>
          </View>
        </View>
      </View>
      <Pressable
        style={{ backgroundColor: '#d057d2', padding: 15 , borderRadius: 15, marginLeft: 'auto', marginRight: 'auto', marginTop: 15 }}
        onPress={() => navigation.navigate('Quiz')}
      >
        <Text style={{ color: 'white', fontWeight: '600', fontSize: 20 }}>START QUIZ</Text>
      </Pressable>
    </View>
  )
}

export default HomeScreen