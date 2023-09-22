import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { bookStore } from '../data/books'
import { useState } from 'react'
import * as React from 'react';
import { Button } from 'react-native-paper';

export default function About({navigation}) {
    const [showMe, setShowMe] = useState(false);

    function toggle() {
        setShowMe(!showMe);
      }
    const [data, setData] = useState();

    const addingData = () => {
        console.log("started");
        setData(bookStore);
    };

    return (
   
        <View style={styles.container}>
            <View style={styles.textContainer}>
            <Text style={styles.font1}>Welcome to the dashboard</Text>
            <Text style={styles.font2}>Turn the Switch to display Data!</Text>
            </View>
            <Button onPressIn={toggle}  style={styles.button} icon="alert-octagram" mode='contained' onPress={() => addingData()}/>
            {
                data && data.books.map((b, index) => {
                    if(b.category.toLowerCase() == "java") {
                        return (
                            <View key={index} style={{display: showMe ? "block" : "none"}}>
                                <Text>{b.title}</Text>
                            {
                                b.authors && b.authors.map((a, ind) => {
                                    return(
                                        <Text key={ind}>
                                            {a}
                                        </Text>
                                    )
                                })
                            }
                            </View>
                        )
                    }
                })
            }
        </View>
  
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#c6c6ff",
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        display: "flex",

        alignItems: "center",
        backgroundColor: "#454545",
        justifyContent: 'center',

    },

    textContainer: {
display: "flex",
flexDirection: "column",
justifyContent: "center",
alignItems: "center",
gap: 30,

    },
    font1: {
        fontSize: 50,
        textAlign: "center",
   
    },
    font2: {
        
        fontSize: 16,
       

    }
});
