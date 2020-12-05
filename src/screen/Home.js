import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Directions } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import {useState} from 'react';

const Home = () =>{
    const [inputValue , setInputValue] = useState (['Todos List']);
    const [getValue , setGetValue] = useState ('');
    console.log(getValue)

  const  savingData = () =>{
    if ( getValue === ''){
        alert('Enter Some value')
    } else {
        setInputValue([...inputValue , getValue])
         setGetValue('')
    }
    }
    console.log(inputValue)

    const remove = (index) => {
        inputValue.splice(index , 1)
        setInputValue([...inputValue])
    }

    const allDelete = () => {
        setInputValue([])
    }
    
    return(
<View style={styles.todosView}>
<View  style={{flexDirection : 'row' , marginTop: 40, justifyContent: 'center'}}> 

<TextInput value={getValue} onChangeText={(text)=> setGetValue(text) }
style={{ height: 40, borderColor: 'gray', borderWidth: 1 , width: '50%' ,  borderRadius: 5, fontSize: 20 , textAlign: 'center'}}
 placeholder='Enter your todo list'/>

<TouchableOpacity onPress={savingData } activeOpacity={0.6} style={styles.AddBtn} >
    <Text style={styles.addBtnList}>Add in List</Text>
</TouchableOpacity>

<TouchableOpacity activeOpacity={0.6} style={styles.AddBtnDelte} >
    <Text onPress={allDelete} style={styles.addBtnList}>All Delete</Text>
</TouchableOpacity>
</View>
<ScrollView>
   
    {inputValue.map((value, index)=>{
return <Text style={styles.listItems} key={index}>{value}<TouchableOpacity activeOpacity={0.6} style={styles.AddBtnDelteList} >
     <Text onPress={() => remove (index)} style={styles.addBtnList }> Delete</Text>
    </TouchableOpacity> </Text>
    })}

</ScrollView>

</View>


    )
}

const styles = StyleSheet.create({
    todosView :{
        backgroundColor : '#e3d132',
        flex: 1
    },
    AddBtn:{
        backgroundColor : '#63614e',
        borderRadius: 5
     
    },
    AddBtnDelte:{
        backgroundColor : 'red',
        borderRadius: 5 
    },
    AddBtnDelteList:{
        backgroundColor : 'red',
        borderRadius: 5 ,
        marginLeft: 30,
        
    },
    addBtnList:{
        color: 'white',
       padding: 10 ,
       
    },
    addBtnListDelete:{
        color: 'white',
        padding: 10 ,
        marginLeft: 30
    },
    listItems:{
        alignSelf: 'center',
        margin: 5,
        backgroundColor: '#63614e',
        padding: 5,
        borderRadius: 5,
        color: 'white'
        
    }
   
})

export default Home;