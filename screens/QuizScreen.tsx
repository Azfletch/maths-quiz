import { SafeAreaView, StyleSheet, Text, View, Button, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Formik, Form, Field } from 'formik'

import questions from "../data/questions"

import TenFrame from '../components/TenFrame'
// import AnswerInput from '../components/AnswerInput'
import { useNavigation } from '@react-navigation/native'

const QuizScreen = () => {
  const navigation = useNavigation()
  const [answer, setAnswer] = useState('')
  const [points, setPoints] = useState('0')
  const [index, setIndex] = useState(0)
  const [answerStatus, setAnswerStatus]: any = useState(null)
  const [answers, setAnswers]: any = useState([])
  const [counter, setCounter] = useState(15)

  let interval: any = null

  useEffect(() => {
    console.log(answer)
    if (Number(answer) === Number(currentQuestion?.correctAnswer)) {
      setPoints((points => points + 1))
      setAnswerStatus(true)
      answers.push({ question: index + 1, answer: true })
    } else {
      setAnswerStatus(false)
      answers.push({ question: index + 1, answer: false })
    }
  }, [answer])

  useEffect(() => {
    setAnswerStatus(null)
  }, [index])

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
    console.log(index + 1, length)
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

      {/* Progress Bar */}

      <View style={{ backgroundColor: '#f2f6a2', marginTop: 20, padding: 15 }}>
        <Text style={{ fontSize: 20, fontWeight: '600', marginBottom: 20 }}>{currentQuestion?.question}</Text>
        <TenFrame question={currentQuestion} />
        <View style={{ marginTop: 20 }}>
          <Formik
            initialValues={{ answer: '' }}
            onSubmit={async (values) => setAnswer(values.answer)}
          >
            <Form>
              <label htmlFor="answer">Answer</label>
              <Field id="answer" name="answer" type="numeric" placeholder="Type your answer here" />

              <button type="submit">Submit</button>
            </Form>
          </Formik>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default QuizScreen