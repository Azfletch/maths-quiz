import { SafeAreaView, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Formik, Form, Field } from 'formik'

import questions from "../data/questions"

import TenFrame from '../components/TenFrame'
import { useNavigation } from '@react-navigation/native'

const QuizScreen = () => {
  // Initialize State
  const navigation = useNavigation()
  const [answer, setAnswer] = useState('')
  const [points, setPoints] = useState(0)
  const [index, setIndex] = useState(0)
  const [answerStatus, setAnswerStatus]: any = useState(null)
  const [answers, setAnswers]: any = useState([])
  const [counter, setCounter] = useState(15)

  let interval: any = null

  const progressPercentage = Math.floor((index/questions.length) * 100)

 // Handle correct answer 
  useEffect(() => {
    if (Number(answer) === Number(currentQuestion?.correctAnswer)) {
      setPoints((points => points + 1))
      setAnswerStatus(true)
      answers.push({ question: index + 1, answer: true })

      setIndex(index + 1)
      setCounter(15)
      
    } else {
      setAnswerStatus(false)
      answers.push({ question: index + 1, answer: false })
    }
  }, [answer])

  // Handle answer status
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

  // Handle navigation after last question
  useEffect(() => {
    const { length } = questions
    if(index + 1 > questions.length) {

      clearTimeout(interval)
      navigation.navigate('Results', {
        answers: answers,
        points: points
      })
    }
  }, [index])

  useEffect(() => {
    if (!interval) {
      setCounter(15)
    }
  }, [index])

  const currentQuestion = questions[index as any]

  return (
    <SafeAreaView>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10 }}>
        <Text>MATHS CHALLENGE</Text>
        <Text style={{ padding: 10, backgroundColor: 'magenta', borderRadius: 10 }}>{counter}</Text>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 10 }}>
        <Text>Your Progress</Text>
        <Text>({index}/{questions.length}) questions answered</Text>
      </View>

      <View style={{ backgroundColor: '#f2f6a2', marginTop: 20, marginHorizontal: 10, padding: 15, borderRadius: 10 }}>
        <Text style={{ textAlign: 'center', color: '#d257d2', fontWeight: '600', fontSize: 20, marginBottom: 20 }}>{currentQuestion?.question}</Text>
        <TenFrame question={currentQuestion} />
        <View style={{ marginTop: 20 }}>
          <Formik
            initialValues={{ answer: '' }}
            onSubmit={async (values) => setAnswer(values.answer)}
          >
            <Form style={{ display: 'flex', flexDirection: 'column' }}>
              <Field style={{ backgroundColor: 'white', padding: 15, borderRadius: 10 }} id="answer" name="answer" type="numeric" placeholder="Type your answer here" />

              <button style={{ outline: 'none', fontSize: 20, fontWeight: 600, color: 'white', backgroundColor: '#d057d2', padding: 15, borderRadius: 15, marginTop: 15 }} type="submit">Submit</button>
            </Form>
          </Formik>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default QuizScreen