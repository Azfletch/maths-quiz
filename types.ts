import { NavigationProp } from '@react-navigation/native'

// interface Frame {
//   counterColor: 'red' | 'blue' | 'green' | 'white'
// }

interface Frame {
  counterColor: string
}

interface Question {
  question: string
  correctAnswer: number,
  frames: Frame[]
}

interface TenFrameProps {
  question: Question
}

interface ScreenProps {
  navigation: NavigationProp<any, any>
}

interface ResultsScreenRouteParams {
  points: number,
  answers: ResultsAnswer[]
}

interface ResultsAnswer {
  question: number
  answer: boolean
}

export {
  Frame,
  Question,
  TenFrameProps,
  ScreenProps,
  ResultsAnswer,
  ResultsScreenRouteParams
}