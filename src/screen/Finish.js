import React, { Component } from 'react'
import {Text} from 'react-native'


const Finish = ({route})=>{

// console.log(route)
    return(
<Text>
    finishim {route.params.player}
</Text>
    )
}


export default Finish