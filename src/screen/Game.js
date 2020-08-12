import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, Button, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { useDispatch, useSelector } from "react-redux"
import { setSudoku, setSudokuValidate, setSudokuSolve } from '../store/action/sudokuAction'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function App({ route, navigation }) {

  const { name: player } = route.params || 'uajnga'
  const { difficulty } = route.params || 'hard'

  console.log(difficulty)
  const dispatch = useDispatch()
  const { defaultBoard: game, solution, status, } = useSelector(state => state)
  const [boardNew, setBoardNew] = useState([])
  const [newStatus, setStatus] = useState('')

  useEffect(() => {
    dispatch(setSudoku(difficulty))
  }, [dispatch])

  useEffect(() => {
    setBoardNew(JSON.parse(JSON.stringify(game)))
  }, [game])

  useEffect(() => {
    setStatus(JSON.parse(JSON.stringify(status)))
  }, [status])

  useEffect(() => {
    setBoardNew(JSON.parse(JSON.stringify(solution)))

  }, [solution])

  const updateBoard = (val, rowIdx, colIdx) => {

    const updateBoard = { ...boardNew, board: boardNew.board }
    updateBoard.board[rowIdx][colIdx] = Number(val)
    setBoardNew(updateBoard)

  }

  const handleSolve = dataSolve => {
    dispatch(setSudokuSolve(dataSolve))

  }
  const handleValidate = dataValidate => {

    dispatch(setSudokuValidate(dataValidate))

  }


  if (boardNew.length == 0) {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#1dd3bd" />
      </View>
    )
  }
  // useEffect(()=>{

  // })
  const push = () => {
    console.log(newStatus)
    if (newStatus == 'solved') {
      navigation.navigate('Finish', { player })
    }
  }


  console.log(newStatus, 'cuttyyy1')


  return (

      <View style={styles.container}>
      <View style={styles.header}>

        <Text style={{
          marginRight:0,
          marginLeft:-40
          ,paddingRight:50, marginBottom:20,fontSize:17}}>{player}</Text>
      {
        status ? <Text
        style={{marginBottom:30,fontSize:17}}
        >{status}</Text> : null
      }
        <Text
         style={ {paddingLeft:50, marginBottom:20,fontSize:17}}
         > {difficulty}</Text>
      </View>
        {boardNew.board.map((rows, rowdx) => {

          return (
            <View key={rowdx} style={styles.row} >

              {rows.map((col, coldx) => {

                return (
                  <TextInput
                    key={coldx}
                    textAlign={'center'}
                    style={[styles.col,
                    { fontWeight: "bold", backgroundColor: game.board[rowdx][coldx] == 0 ? '#ddf3f5' : '#a6dcef', color: '#e36387' }]}
                    maxLength={1}
                    keyboardType={"number-pad"}
                    value={col == 0 ? "" : col + ""}
                    editable={game.board[rowdx][coldx] == 0 ? true : false}
                    onChangeText={text => updateBoard(text, rowdx, coldx)} ></TextInput>

                )
              })}
            </View>
          )
        })}
        <View style={{ marginTop:20  ,flexDirection: 'row', justifyContent: "space-around" }}
>

        <View style={{marginRight:30}}>

          <Button onPress={() => handleSolve(boardNew)} 
          title="solved"
          color="#005086"
          //  style={{fontSize:17}}
          >
          </Button>
          </View>


        <View style={{marginLeft:30}} >
          <Button
          color="#f194ff"
          // style={{fontSize:17}}
          onPress={() => {
            handleValidate(boardNew)
            push()
          }}
          // onPress={()=>cek()}
          title="validate">
          </Button>
          
          </View>
        </View>

      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row'

  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  },
  col: {
    borderWidth: 1,
    width: (windowWidth - 30) / 9,
    height: (windowWidth - 30) / 9
  },
  header:{
    flexDirection: 'row', 
    // justifyContent: "space-around" ,
    width: (windowWidth - -30) / 3,
  }
});
