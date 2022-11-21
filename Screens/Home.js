import {View, Text, Button, Image, TouchableOpacity, Touchable, StyleSheet, SliderComponent} from 'react-native'
import Score from '../assets/Score.png'
import MyStudent from '../assets/MyStudent.png'
import {db} from '../firebaseConfig'
import {
    addDoc, collection, getDocs,
     doc, updateDoc, where, query} from "firebase/firestore";
import {useState} from 'react'
import TestList from './TestList'

const Home = (props) => {
    return (
        <View>
            <Text style = {styles.List}>The number of students in a class</Text>
            <Text style = {styles.List}>Class Number</Text>
            <Text style = {styles.List}>Telephone Number</Text>
            <Text style = {styles.List}>Name</Text>
            <Text style = {styles.List}>진도표시</Text>
            <Text style = {styles.List}>Teacher Name</Text>
            {/*
            <TouchableOpacity
                    onPress={ ()=>{
                        props.navigation.navigate("ClassInformation")
                    }}>
                <Image
                    style={{width:400,height:100}}
                    source={Score}
                    resizeMode="contain"
                />
            </TouchableOpacity>
            <TouchableOpacity
                    onPress={ ()=>{
                        props.navigation.navigate("StudentList")
                    }}>
                <Image
                    style={{width:400,height:100}}
                    source={MyStudent}
                    resizeMode="contain"
                />
            </TouchableOpacity>
            */}
            <TouchableOpacity
                    onPress={ ()=>{
                        props.navigation.navigate("TestList")
                    }}>
                <Text style = {styles.startbutton}
                    Go to TestList
                />
            </TouchableOpacity>         
        </View>
    );
}

const styles = StyleSheet.create({
    List: {
      width:'70',
      marginTop:50,
      marginLeft :20,
      marginRight:200,
      fontSize:25,
      padding:10
    },
    startbutton: {
        width:'70',
        marginLeft :200,
        marginRight:200,
        fontSize:40,
        padding:10
    }
  });


export default Home