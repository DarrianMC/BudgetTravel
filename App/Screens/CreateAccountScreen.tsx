
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const CreateAccountScreen : React.FC<{ navigation: any }> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCreateAccount = () => {
     
     if(true) // Django confimrs info is valid
     {
     	navigation.navigate('CreateAccountScreen2');
     }
     else
     {
     
     
     }
    // Something to a Django API
  };

  return (
<View>
      <Text style = {styles.title}>Lets Get Started !</Text>
      

      	
      	<View style={{ flexDirection: 'column' }}>

           <Text style = {styles.headerText}> First Name </Text>
           
           <View style = {styles.row}>
      	<View style = {styles.box}>	
      		
      		<TextInput
        			textAlign={'center'}
        			style = {styles.text}
        			placeholderTextColor= 'gray'
        			placeholder="John"
        			value={password}
        			onChangeText={(text) => setPassword(text)}
      		/>
           </View>
           </View>

	<Text style = "padding: 20"> </Text>

           <Text style = {styles.headerText}> Last Name </Text>
                      <View style = {styles.row}>
      	<View style = {styles.box}>	
      		
      		<TextInput
        			textAlign={'center'}
        			style = {styles.text}
        			placeholderTextColor= 'gray'
        			placeholder="Doe"
        			value={password}
        			onChangeText={(text) => setPassword(text)}
      		/>
           </View>
           </View>
           
      	<Text style = {styles.div}> </Text>
      	

           <Button title="Create Account" onPress={handleCreateAccount} />
           
           
           
           
      	
      	
      </View> 
      
      
      
</View>    
      
      


  );
};




const styles = StyleSheet.create({
  
  title: {
     flexDirection:'column',
     textAlign: "center",
     fontSize: 40,
     color: "black",
     padding: 20,
     marginTop: 50,
     marginBottom: 70,
  },
  
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    
  },
  
  col: {
  	flexDirection: 'column',
  },
  
  
  box: {
    borderWidth: 1,       
    borderColor: 'black',  
    borderRadius: 5,     
    
    width: 150,  
  },
  
  text: {
    color: "black",
    textAlign : "center",
    padding: 5,
    fontSize: 10,
  },
  
  headerText: {
    color: "black",
    textAlign : "center",
    padding: 5,
    fontSize: 20,
  },
  
  div: {
    padding: 130,
  },
  
  but:{
    display: "flex",
    width: "20%",
    flexDirection: "row",
    
  }
 
  
});

export default CreateAccountScreen;

