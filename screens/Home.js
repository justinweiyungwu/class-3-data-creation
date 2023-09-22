import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TouchableOpacity} from 'react-native';
import { useState } from 'react'
import { Avatar, Button, Card, Text } from 'react-native-paper';



export default function Home({navigation}) {
    const [showMe, setShowMe] = useState(false);

    function toggle() {
        setShowMe(!showMe);
      }

    const [btnBlue, setBtnBlue] = useState(1);

    const check = () => {
        
        if(btnBlue == true) {
            console.log("ONE")
            navigation.push('About')
        }
        console.log(btnBlue);
       
    }

    return (
      
        <View style={styles.container}>
            <View style={{display: showMe ? "none" : "block"}}>
         <Card>
 
    <Card.Content>
      <Text variant="titleLarge">Class 3: Expo Data</Text>
      <Text variant="bodyMedium">Hello. This is an application that shows our Class 3 exercise. </Text>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/id/237/200/300' }} />
    <Card.Actions>
      <Button onPressOut={toggle} style={styles.btnBlue}>Cancel</Button>
      <Button onPress={() => check()} 
                                style={styles.btnBlue}>Ok</Button>
    </Card.Actions>
  </Card>
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
    btnBlue: {
        alignItems: 'center',
        backgroundColor: '#63C5DA',
        borderColor: '#63C5DA',
        borderRadius: 10,
        borderWidth: 1,
        padding: 10,
    },

    
});
