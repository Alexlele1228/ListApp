import { StatusBar } from 'expo-status-bar';
import React, {Component}from 'react';
import { StyleSheet, Text, View,SafeAreaView, FlatList, TextInput, Button } from 'react-native';
import './components/Items';
import { Item } from './components/Items';
export default class App extends Component{
state={
  expenseAmount:0,
  expenseCategory:'',
  renderAgain:1
}

  ListData=[
  
  ]
    render(){
      return (
           <SafeAreaView>
             <Text>Add your expense</Text>

             <TextInput  style={styles.input}
                placeholder="$amount"
               onChangeText={text=>this.setState({
                expenseAmount:parseFloat(text)
                })} 
                keyboardType='number-pad'
                />

             <TextInput  style={styles.input}
                placeholder="category"
                onChangeText={text=>this.setState({expenseCategory:text})}
             />

             <Button title="Add" onPress={()=>this.addItem()}/>

              <FlatList
                 data={this.ListData}
                 renderItem={this.renderList}
                 keyExtractor={item=>item.id}
                 extraData={this.ListData}
              />
          
           </SafeAreaView>
      )
    }

    renderList=({item})=>(
      <Item amount={item.amount} category={item.category}/>
    )

    addItem=()=>{
    
      let itemId=new Date().getTime().toString()
      let item={
        id:itemId, 
        amount:this.state.expenseAmount,
        category:this.state.expenseCategory
       }
       this.ListData.push(item)
      if(this.state.renderAgain==1)
         this.setState({renderAgain:0})
         else
         this.setState({renderAgain:1})
     
    }

}



const styles=StyleSheet.create({
  main:{
    paddingHorizontal:10,

  },

  input:{
    width:'100%',
    padding:10,
    borderColor:'black',
    borderWidth:1,
    marginVertical:15

  }

})
 