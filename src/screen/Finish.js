import React, { Component, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions, Button } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

const windowWidth = Dimensions.get('window').width;

const Finish = ({ navigation, route }) => {
    console.log(route.params.player)
    // const [tableData, setTableData] = useState([['Name', 'Status',]])
    // const [tableHead, setTableHead] = useState([
    //     ['Name', 'Status'],
    //     ['a', 'b'],
    //     ['1', '2'],
    //     ['a', 'b']
    // ])
    const toHome = () => {
        navigation.navigate("Home",{
            resetName:true
        })
        
    }


    return (

        <View style={styles.container}>
            <Text style={{fontSize:40}}>congratulations</Text>
            <Text style={{fontSize:50}}>{route.params.player}</Text>
     

            <Button color="#fa26a0" title="New Game" onPress={ () => {
          toHome()
        }}/>
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
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6 },
    
});

export default Finish