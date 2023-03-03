import React from 'react'
import { Text, View, Pressable } from 'react-native'
import { useRoute, RouteProp } from '@react-navigation/native'

import { ScreenProps, ResultsScreenRouteParams } from '../types'

const ResultsScreen = ({ navigation }: ScreenProps): JSX.Element => {
  const route: RouteProp<{ params: ResultsScreenRouteParams }, 'params'> = useRoute()
  const { params } = route

  return (
    <View style={{ marginTop: 30, padding: 10 }}>
      <Text style={{ textAlign: 'center', color: '#d257d2', fontWeight: '600', fontSize: 20 }}>RESULTS</Text>

      <View style={{ padding: 10, borderRadius: 6, backgroundColor: '#f2f6a2', marginTop: 15 }}> 
        <Text style={{ marginLeft: 5, color: '#d257d2', fontWeight: '500', fontSize: 20 }}>You Scored:</Text>
        <Text style={{ marginLeft: 5, color: '#d257d2', fontWeight: '500', fontSize: 20 }}>{ `${params?.points} / 5` }</Text>
      </View>

      <Pressable
        style={{ backgroundColor: '#d057d2', padding: 15, borderRadius: 15, marginLeft: 'auto', marginRight: 'auto', marginTop: 15 }}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={{ color: 'white', fontWeight: '600', fontSize: 20 }}>RETURN TO HOME</Text>
      </Pressable>
    </View>
  )
}

export default ResultsScreen