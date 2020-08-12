import React, { useState, useEffect } from 'react'
import {
    TouchableOpacity,
    View, Text,
    ImageBackground,
    StyleSheet, Image,
    Dimensions, TextInput,
    Picker
} from 'react-native'

import bgImage from '../../assets/background2.jpg'
import logo from '../../assets/game.png'

const windowWidth = Dimensions.get('window').width;

const Home = ({ navigation }) => {
    const [name, SetName] = useState()
    const [difficulty, SetDifficulty] = useState("Random")


    const GetName = nama => {
        // console.log(nama.nativeEvent.text,'namee')

        SetName(nama.nativeEvent.text)
    }
    const GetDifficulty = esay => {
        // console.log(esay, 'namee')
        SetDifficulty(esay)
    }

    const onCek = () => {
        if (name == undefined || name == null || name == "") {
            alert('enter your name')
        } else {
            navigation.navigate("Game", {
                name, difficulty
            })
  
        }
    }
    useEffect(() => {

    }, [name])

    return (
        <ImageBackground source={bgImage} style={styles.backGroundContainer}>
            <View style={styles.logoContainer}>
                <Image source={logo} style={styles.logo} />
                <Text style={styles.logoText}>LOGIN</Text>
            </View>
            <View>
                <TextInput placeholder={'Username'}
                    style={styles.input}
                    placeholderTextColor={'grey'}
                    // underlineColorAndroid='transparent'
                    onChange={text => GetName(text)}
                />
                {/* <Picker /> */}
            </View>
            <View>
                <Picker
                    selectedValue={difficulty}
                    style={styles.diff}
                    onValueChange={itemValue => GetDifficulty(itemValue)}
                >
                    <Picker.Item label="Random" value="random" />
                    <Picker.Item label="Easy" value="easy" />
                    <Picker.Item label="Medium" value="medium" />
                    <Picker.Item label="Hard" value="hard" />
                </Picker>
            </View>
            <TouchableOpacity
                onPress={() => onCek()}
                style={styles.button} >
                <Text style={styles.text}  > Login</Text>
            </TouchableOpacity >
        </ImageBackground>
    )
}


const styles = StyleSheet.create({
    backGroundContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoContainer: {
        alignItems: "center"
    },
    logo: {
        width: 120,
        height: 120
    },
    logoText: {
        color: 'black',
        fontSize: 20,
        fontWeight: '500',
        marginTop: 10,
        opacity: 0.5
    },
    input: {
        width: windowWidth - 55,
        height: 45,
        borderRadius: 25,
        fontSize: 16,
        paddingLeft: 15,
        backgroundColor: 'rgba(0,0,0,0.35)',
        color: 'rgba(255,255,255,0.7)',
        marginHorizontal: 25

    },
    button: {
        width: windowWidth - 55,
        height: 45,
        borderRadius: 25,
        justifyContent: 'center',
        backgroundColor: "rgba(255,255,255,0.4)",
        marginTop: 10
    },
    text: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: 16,
        textAlign: "center"
    },
    diff: {
        height: 40,
        // height: 45,
        justifyContent: 'center',
        marginTop: 10,
        width: 125,
        // borderRadius: 25,

        // borderRightColor: "red",
        // backgroundColor: "rgba(255,255,255,0.4)"
        color: "white",
        //  fontFamily:"Ebrima", 
        fontSize: 17
    }
})
export default Home