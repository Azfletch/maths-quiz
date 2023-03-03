import { View } from 'react-native'
import React from 'react'
import { TenFrameProps } from '../types'

const TenFrame = (props: TenFrameProps): JSX.Element => {
  const frames = props?.question?.frames

  if (props.question && props.question.frames) {
    return (
      <View>
        <View style={{ flexDirection: 'row', marginLeft: 'auto', marginRight: 'auto' }}>
          <View style={{ padding: 20, borderColor: 'black', borderWidth: 2 }}>
            <View style={{ alignItems: 'center', height: 25, width: 25, backgroundColor: `${frames[0].counterColor}`, borderRadius: 100 }}>

            </View>
          </View>
          <View style={{ padding: 20, borderColor: 'black', borderWidth: 2 }}>
            <View style={{ alignItems: 'center', height: 25, width: 25, backgroundColor: `${frames[1].counterColor}`, borderRadius: 100 }}>

            </View>
          </View>
          <View style={{ padding: 20, borderColor: 'black', borderWidth: 2 }}>
            <View style={{ alignItems: 'center', height: 25, width: 25, backgroundColor: `${frames[2].counterColor}`, borderRadius: 100 }}>

            </View>
          </View>
          <View style={{ padding: 20, borderColor: 'black', borderWidth: 2 }}>
            <View style={{ alignItems: 'center', height: 25, width: 25, backgroundColor: `${frames[3].counterColor}`, borderRadius: 100 }}>

            </View>
          </View>
          <View style={{ padding: 20, borderColor: 'black', borderWidth: 2 }}>
            <View style={{ alignItems: 'center', height: 25, width: 25, backgroundColor: `${frames[4].counterColor}`, borderRadius: 100 }}>

            </View>
          </View>
        </View>
        <View style={{ flexDirection: 'row', marginLeft: 'auto', marginRight: 'auto' }}>
          <View style={{ padding: 20, borderColor: 'black', borderWidth: 2 }}>
            <View style={{ alignItems: 'center', height: 25, width: 25, backgroundColor: `${frames[5].counterColor}`, borderRadius: 100 }}>

            </View>
          </View>
          <View style={{ padding: 20, borderColor: 'black', borderWidth: 2 }}>
            <View style={{ alignItems: 'center', height: 25, width: 25, backgroundColor: `${frames[6].counterColor}`, borderRadius: 100 }}>

            </View>
          </View>
          <View style={{ padding: 20, borderColor: 'black', borderWidth: 2 }}>
            <View style={{ alignItems: 'center', height: 25, width: 25, backgroundColor: `${frames[7].counterColor}`, borderRadius: 100 }}>

            </View>
          </View>
          <View style={{ padding: 20, borderColor: 'black', borderWidth: 2 }}>
            <View style={{ alignItems: 'center', height: 25, width: 25, backgroundColor: `${frames[8].counterColor}`, borderRadius: 100 }}>

            </View>
          </View>
          <View style={{ padding: 20, borderColor: 'black', borderWidth: 2 }}>
            <View style={{ alignItems: 'center', height: 25, width: 25, backgroundColor: `${frames[9].counterColor}`, borderRadius: 100 }}>

            </View>
          </View>
        </View>
      </View>
    )
  } else {
    return <></>
  }

  
}

export default TenFrame