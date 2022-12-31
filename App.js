import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TouchableWithoutFeedback, TouchableOpacity, Image, SafeAreaView, TouchableHighlight, TouchableNativeFeedback, Alert } from 'react-native';
import { Button } from 'react-native';
import { useDimensions } from '@react-native-community/hooks';

export default function App() {
  // console.log(useDimensions());
  // const handleProcess = () => console.log("Text Pressed")
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text onPress={handleProcess}>It's me EdiTh</Text>
      <TouchableNativeFeedback onPress={()=> console.log("tapped image")}>

        <Image source={{
        width:200,
        height: 300,
        uri: "https://res.cloudinary.com/dtjivws2c/image/upload/v1/media/images/PFP50x70_bwwfyx" } }/>
      </TouchableNativeFeedback>
      <Text>I'm a web/app developer</Text> */}
      {/* <Button>Hello</Button> */}
      {/* <Button
      color="orange" 
      title="Click Me" 
      onPress={()=>Alert.prompt("My title", "My message", text => console.log(text))}/>
      <StatusBar style="auto" /> */}
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: "100%",
          height: "30%",
          alignItems:"center",
          justifyContent:"center"
        }}>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  Title:{
    fontSize:50,
    color:'black',
    fontWeight:'bold',
    textAlign: 'center'
},
subTitle:{
  fontSize:30,
  color:'black',
  fontWeight:'normal',
  textAlign: 'center'
},

});
