import React, { useState, useEffect } from 'react'
import { SafeAreaView, Text, View , TextInput, Pressable } from 'react-native'
import { Formik } from 'formik'

import questions from '../data/questions'
import TenFrame from '../components/TenFrame'

import { Question, ResultsAnswer, ScreenProps } from '../types'

const QuizScreen = ({ navigation }: ScreenProps): JSX.Element => {
  // Initialize State
  const [answer, setAnswer] = useState<number | null>(null)
  const [points, setPoints] = useState<number>(0)
  const [index, setIndex] = useState<number>(0)
  const [answerStatus, setAnswerStatus] = useState<boolean | null>(null)
  const [answers, setAnswers] = useState<ResultsAnswer[]>([])
  const [counter, setCounter] = useState<number>(15)

  let interval: any = null

 // Handle correct answer 
  useEffect(() => {
    if (Number(answer) === Number(currentQuestion?.correctAnswer)) {
      setPoints((points => points + 1))
      setAnswerStatus(true)
      answers.push({ question: index + 1, answer: true })
      
    } else {
      setAnswerStatus(false)
      answers.push({ question: index + 1, answer: false })
    }
  }, [answer])

  // Use answer status to reset state for next question
  useEffect(() => {
    if (answerStatus !== null) {
      setIndex(index + 1)
      setCounter(15)
      setAnswer(null)
    }
  }, [answerStatus])

  // Reset answer status
  useEffect(() => {
    setAnswerStatus(null)
  }, [index])

  // Handle timer
  useEffect(() => {
    const myInterval = () => {
      if (counter >= 1) {
        setCounter((state) => state - 1)
      }

      if (counter === 0) {
        setIndex(index + 1)
        setCounter(15)
      }
    }

    interval = setTimeout(myInterval, 1000)

    // clean up
    return () => {
      clearTimeout(interval)
    }
  }, [counter])

  // Reset timer
  useEffect(() => {
    if (!interval) {
      setCounter(15)
    }
  }, [index])

  // Handle navigation after last question
  useEffect(() => {
    const { length } = questions
    if(index + 1 > length) {

      clearTimeout(interval)
      navigation.navigate('Results', {
        answers: answers,
        points: points
      })
    }
  }, [index])

  // Reset timer
  useEffect(() => {
    if (!interval) {
      setCounter(15)
    }
  }, [index])

  const currentQuestion: Question = questions[index]

  return (
    <SafeAreaView>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10 }}>
        <Text testID='quiz-title' style={{ color: '#d257d2', fontWeight: '600', fontSize: 20 }}>MATHS CHALLENGE</Text>
        <Text testID='quiz-timer' style={{ padding: 10, backgroundColor: '#d057d2', borderRadius: 10, color: 'white', fontWeight: '600', fontSize: 20 }}>{counter}</Text>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 10 }}>
        <Text style={{ color: '#d257d2', fontWeight: '600', fontSize: 15 }}>Your Progress</Text>
        <Text style={{ color: '#d257d2', fontWeight: '600', fontSize: 15 }}>({index}/{questions.length}) questions answered</Text>
      </View>

      <View style={{ backgroundColor: '#f2f6a2', marginTop: 20, marginHorizontal: 10, padding: 15, borderRadius: 10 }}>
        <Text style={{ textAlign: 'center', color: '#d257d2', fontWeight: '600', fontSize: 20, marginBottom: 20 }}>{currentQuestion?.question}</Text>
        <TenFrame question={currentQuestion} />
        <View style={{ marginTop: 20 }}>
          <Formik
            initialValues={{ answer: '' }}
            onSubmit={async (values) => setAnswer(Number(values.answer))}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <View>
                <TextInput
                  style={{ backgroundColor: 'white', padding: 15, borderRadius: 10 }}
                  placeholder="Answer"
                  onChangeText={handleChange('answer')}
                  onBlur={handleBlur('answer')}
                  value={values.answer}
                />
                <Pressable
                  style={{ backgroundColor: '#d057d2', padding: 15, borderRadius: 15, marginLeft: 'auto', marginRight: 'auto', marginTop: 15 }}
                  onPress={handleSubmit}
                >
                  <Text style={{ color: 'white', fontWeight: '600', fontSize: 20 }}>SUBMIT</Text>
                </Pressable>
              </View>
            )}
          </Formik>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default QuizScreen