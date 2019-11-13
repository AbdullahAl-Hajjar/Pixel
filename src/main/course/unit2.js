import React, { Component } from "react";
import {View, Text, Button , Image, ScrollView} from 'react-native';
import styles from "./style.js";
import Icon from "react-native-vector-icons/FontAwesome";


class CourseScreen extends React.Component {

    constructor()
    {
      super()
      this.state={

          CName1 : "Startup Health",
          CName2 : "United Nation",
          CName3 : "Element AI",
          CName4 : "Khan Academy",
          CName5 : "Tesla",
          CName6 : "Ogilvy",
          CName7 : "Welbi",
          CName8 : "Headspace",
          CName9 : "Acumen",
          CName10 : "Peace Corps"  
          
      }
    }
    
    render() {
     
      return (

        
        <View style={styles.container}>
            <View style={styles.companies}>
        <Image
          style={{ width: 100, height:60, marginLeft: 30, marginTop:30 }}
          source={require("../../../assets/Logo_En_Black_200x55.png")}
          resizeMode="contain"
        />
          {/* <Text style={styles.container} >Companies</Text> */}
          </View>
          <ScrollView vertical={true}>
      
     <View style={styles.secondrow}>
          <Text style={styles.titleCompany}>Health Companies</Text>
           <ScrollView horizontal={true}>
             <View >
             <Image
              style={styles.card}
              source={require("../../../assets/companies-card/Startup_health.png")}
              
            />
            <Text style={styles.titleText}>{this.state.CName1}</Text>
            
          <Icon name="heart-o" size={30} style={styles.heartIcon} />
        
            </View>

            <View >
             <Image
              style={styles.card}
              source={require("../../../assets/companies-card/Group-2.png")}
              
            />
            <Text style={styles.titleText}>{this.state.CName1}</Text>
            
          <Icon name="heart-o" size={30} style={styles.heartIcon} />
        
            </View>
           
           <View >
            <Image
              style={styles.card}
              source={require("../../../assets/companies-card/head.png")}
            />
            <Text style={styles.titleText}>{this.state.CName7}</Text>
            <Icon name="heart-o" size={30} style={styles.heartIcon} />
            </View>
            <View>
            <Image
              style={styles.card}
              source={require("../../../assets/companies-card/verge.png")}
            />
            <Text style={styles.titleText}>{this.state.CName8}</Text>
            <Icon name="heart-o" size={30} style={styles.heartIcon} />
            </View>

          
          </ScrollView>
        </View>

        <View style={styles.secondrow}>
          <Text style={styles.titleCompany}>Economic Companies</Text>
           <ScrollView horizontal={true}>
             <View>
             <Image
               style={styles.card}
              source={require("../../../assets/companies-card/United_Nations_flag.png")}
            />
             <Text style={styles.titleText}>{this.state.CName2}</Text>
             <Icon name="heart-o" size={30} style={styles.heartIcon} />
             </View>
           <View>
            <Image
               style={styles.card}
              source={require("../../../assets/companies-card/a-hero-rev.png")}
            />
            <Text style={styles.titleText}>{this.state.CName9}</Text>
            <Icon name="heart-o" size={30} style={styles.heartIcon} />
            </View>
            <View>
             <Image
               style={styles.card}
               source={require("../../../assets/companies-card/peace.png")}
            />
            <Text style={styles.titleText}>{this.state.CName10}</Text>
            <Icon name="heart-o" size={30} style={styles.heartIcon} />
            </View>
           
          </ScrollView>
        </View>

        <View style={styles.secondrow}>
          <Text style={styles.titleCompany}>Technology Companies</Text>
           <ScrollView horizontal={true}>
             <View>
             <Image
               style={styles.card}
              source={require("../../../assets/companies-card/Element_AI_logo.png")}
            />
            <Text style={styles.titleText}>{this.state.CName3}</Text>
            <Icon name="heart-o" size={30} style={styles.heartIcon} />
            </View>
            <View>
            <Image
               style={styles.card}
              source={require("../../../assets/companies-card/meat.jpg")}
            />
            <Text style={styles.titleText}>{this.state.CName3}</Text>
            <Icon name="heart-o" size={30} style={styles.heartIcon} />
            </View>
            <View>
             <Image
               style={styles.card}
               source={require("../../../assets/companies-card/IBM.jpeg")}
            />
            <Text style={styles.titleText}>{this.state.CName3}</Text>
            <Icon name="heart-o" size={30} style={styles.heartIcon} />
            </View>
             
          </ScrollView>
        </View>

        <View style={styles.secondrow}>
          <Text style={styles.titleCompany}>Society Companies</Text>
           <ScrollView horizontal={true}>
             <View>
             <Image
               style={styles.card}
              source={require("../../../assets/companies-card/Khan_Academy_Logo_Old_version_2015.jpg")}
            />
            <Text style={styles.titleText}>{this.state.CName4}</Text>
            <Icon name="heart-o" size={30} style={styles.heartIcon} />
            </View>
            <View>
            <Image
               style={styles.card}
              source={require("../../../assets/companies-card/khan-logo-dark.png")}
            />
            <Text style={styles.titleText}>{this.state.CName4}</Text>
            <Icon name="heart-o" size={30} style={styles.heartIcon} />
            </View>
            <View>
             <Image
               style={styles.card}
               source={require("../../../assets/companies-card/khan-logo-dark.png")}
            />
            <Text style={styles.titleText}>{this.state.CName4}</Text>
            <Icon name="heart-o" size={30} style={styles.heartIcon} />
             </View>
          </ScrollView>
        </View>

        <View style={styles.secondrow}>
          <Text style={styles.titleCompany}>Environment Companies</Text>
           <ScrollView horizontal={true}>
             <View>
             <Image
               style={styles.card}
              source={require("../../../assets/companies-card/Tesla.jpg")}
            />
            <Text style={styles.titleText}>{this.state.CName5}</Text>
            <Icon name="heart-o" size={30} style={styles.heartIcon} />
             </View>
             
            <View>
            <Image
               style={styles.card}
              source={require("../../../assets/companies-card/Tesla.jpg")}
            />
            <Text style={styles.titleText}>{this.state.CName5}</Text>
            <Icon name="heart-o" size={30} style={styles.heartIcon} />
            </View>
           
            <View>
            <Image
               style={styles.card}
               source={require("../../../assets/companies-card/Tesla.jpg")}
            />
            <Text style={styles.titleText}>{this.state.CName5}</Text>
            <Icon name="heart-o" size={30} style={styles.heartIcon} />
            </View>
             
             
          </ScrollView>
        </View>

        <View style={styles.secondrow}>
          <Text style={styles.titleCompany}>Creative Companies</Text>
           <ScrollView horizontal={true}>
             <View>
             <Image
               style={styles.card}
              source={require("../../../assets/companies-card/Ogilvy_logo.png")}
            />
            <Text style={styles.titleText}>{this.state.CName6}</Text>
            <Icon name="heart-o" size={30} style={styles.heartIcon} />
             </View>
             
            <View>
            <Image
               style={styles.card}
              source={require("../../../assets/companies-card/Ogilvy_logo.png")}
            />
            <Text style={styles.titleText}>{this.state.CName6}</Text>
            <Icon name="heart-o" size={30} style={styles.heartIcon} />
            </View>
           
            <View>
            <Image
               style={styles.card}
               source={require("../../../assets/companies-card/Ogilvy_logo.png")}
            />
            <Text style={styles.titleText}>{this.state.CName6}</Text>
            <Icon name="heart-o" size={30} style={styles.heartIcon} />
            </View>
            
             
          </ScrollView>
        </View>


        {/* <ScrollView vertical={true}>
        <View style={{ marginTop: 35, justifyContent:'center', alignContent:'center'} }>

          
        
          
          <View style={styles.thirdrow}>
          
          
          
            <Image
              style={styles.company}
              source={require("../../../assets/companies-card/Startup_health.png")}
             />
          <Text style={{alignItems: 'center', justifyContent: 'center'}}>{this.state.CName1}{"\n"}</Text>
         
        </View>
        

        <View style={styles.thirdrow}>
          
         
          
            <Image
              style={styles.company}
              source={require("../../../assets/companies-card/Tesla.jpg")}
             />
          <Text style={{alignItems: 'center', justifyContent: 'center'}}>{this.state.CName5}{"\n"}</Text>
         
        </View>

        <View style={styles.thirdrow}>
          
      
          
            <Image
              style={styles.company}
              source={require("../../../assets/companies-card/United_Nations_flag.png")}
             />
          <Text style={{alignItems: 'center', justifyContent: 'center'}}>{this.state.CName2}{"\n"}</Text>
         
        </View>

        <View style={styles.thirdrow}>
          
         
          
            <Image
              style={styles.company}
              source={require("../../../assets/companies-card/Ogilvy_logo.png")}
             />
          <Text style={{alignItems: 'center', justifyContent: 'center'}}>{this.state.CName6}{"\n"}</Text>
          
        </View>

        <View style={styles.thirdrow}>
          
          
          
            <Image
              style={styles.company}
              source={require("../../../assets/companies-card/khan-logo-dark.png")}
             />
          <Text style={{alignItems: 'center', justifyContent: 'center'}}>{this.state.CName4}{"\n"}</Text>
         
        </View>

        <View style={styles.thirdrow}>
          
          
          
            <Image
              style={styles.company}
              source={require("../../../assets/companies-card/Element_AI_logo.png")}
             />
          <Text style={{alignItems: 'center', justifyContent: 'center'}}>{this.state.CName3}{"\n"}</Text>
          
        </View>
      
          
        </View>
        </ScrollView> */}
        </ScrollView>
        </View>
      );
    }
  }

  export default CourseScreen;
  