import React, {Component} from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native';

export default class App extends Component {
    constructor(props){
      super(props)
      this.state = {
        First_Name: "",
        Last_Name: "",
        Age: "",
        Screen_Status: true,
       }
    }

  validInput = (first_name, last_name, age) => {
        var name = /^[A-Za-z]+$/;
        var num = /^[1-9]*$/;
        var result = name.test(first_name);
        var result2 = name.test(last_name);
        var result3 = num.test(age);
        if(!result){
          alert("First Name: Please enter character only");
          this.setState({First_Name: ""});
        }else if(!result2){
          alert("Last Name : Please enter character only");
          this.setState({Last_Name: ""});
        }else if(!result3){
          alert("Age : Please enter valid age");
          this.setState({Age: ""});
        }else{
          return (result && result2 && result3);
        }
      };

onSubmit = () => {
   if (this.state.First_Name == '' || this.state.Last_Name == '' || this.state.Age == ''){
      alert("Please fill out all fields!");
    }else if(this.state.First_Name != '' && this.state.Last_Name != '' && this.state.Age != '' && this.validInput(this.state.First_Name, this.state.Last_Name,              this.state.Age)){
      this.setState({Screen_Status: false});
    }
 }

render() {
  return (
    <View>
     {
        this.state.Screen_Status == true &&
        <View style={styles.container}>
               <TextInput style={styles.input}
                  placeholder="Enter your first name...." value={this.state.First_Name}
                  onChangeText={(First_Name)=> this.setState({First_Name})}/>
               <TextInput style={styles.input}
                  placeholder="Enter your last name...." value={this.state.Last_Name}
                  onChangeText={(Last_Name)=> this.setState({Last_Name})}/>
               <TextInput style={styles.input}
                  placeholder="Enter your age...." value={this.state.Age}
                  onChangeText={(Age)=> this.setState({Age})}
                />
               <TouchableOpacity
                  style = {styles.buttonStyle}
                  onPress={this.onSubmit.bind(this)}>
                  <Text style = {styles.buttonText}> Submit </Text>
               </TouchableOpacity>
      </View>
    }
    {
      this.state.Screen_Status == false &&
        <View style = {styles.container}>
                <Text style={styles.labelStyle}>Your First Name :  {this.state.First_Name}</Text>
                <Text style={styles.labelStyle}>Your Last Name : {this.state.Last_Name}</Text>
                <Text style={styles.labelStyle}>Your Age : {this.state.Age} </Text>
                <TouchableOpacity style = {styles.buttonStyle}
                    onPress={() => { 
                    this.setState({Screen_Status: true, First_Name: "", Last_Name: "", Age: ""}); 
                }}>
                <Text style = {styles.buttonText}> Back </Text>
                <Text>{this.state.textValue}</Text>
                </TouchableOpacity>
        </View>
    }
</View>
    );
  }
}

const styles = StyleSheet.create({
      container: {
      marginTop: 150,
      justifyContent: 'center',
   },
      input: {
          margin: 15,
          height: 40,
          borderBottomColor: '#0044b2',
          borderBottomWidth: 1,
          paddingLeft: 10,
          fontSize: 15,
  },
     buttonStyle: {
          backgroundColor: '#0044b2',
          padding: 10,
          margin: 15,
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
  },
     buttonText:{
          color: 'white'
  },
     labelStyle : {
         fontSize: 15,
         justifyContent: 'center',
         alignItems: 'center',
         borderBottomColor: '#0044b2',
         borderBottomWidth: 1,
         padding: 10,
         margin: 15,
  },
})