import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, Button, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { useDispatch, useSelector } from "react-redux"
import { setSudoku, setSudokuValidate, setSudokuSolve } from '../store/action/sudokuAction'
import Board from '../components/Board'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function App({ route, navigation }) {

  const { name: player } = route.params || 'uajnga'
  const { difficulty } = route.params || 'hard'

  // console.log(difficulty)
  // const dispatch = useDispatch()
  // const { defaultBoard: game, solution, status, } = useSelector(state => state)
  // const [boardNew, setBoardNew] = useState([])
  // const [newStatus, setStatus] = useState('')

  // useEffect(() => {
  //   dispatch(setSudoku(difficulty))
  // }, [dispatch])




  return (
    <View style={styles.container}>
      <Board player={player} difficulty={difficulty} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})


