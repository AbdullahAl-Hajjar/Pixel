import React, { Component } from "react";
import {View, Text, Button ,TouchableOpacity, Image, ScrollView} from 'react-native';
import styles from "./style.js";
import Icon from "react-native-vector-icons/FontAwesome";



class unit2 extends React.Component {

    constructor(props)
    {
      super(props)
      this.state={

          
        count: 0,
        CName1 : "Startup Health",
        CName2 : "Welbi",
        CName3 : "CDC",
        CName4 : "Verge Genomics",
        CName5 : "Headspace",

        CName6 : "United Nation",
        CName7 : "Acumen",
        CName8 : "World Trade Orgnization",
        CName9 : "Y Combinator",
        CName10 : "Peace Corps",  
        
        
        CName11 : "Element AI",
        CName12 : "Beyond Meat",
        CName13 : "IBM",
        CName14 : "Oculus",
        CName15 : "NeuroPace",

        CName16 : "Khan Academy",
        CName17 : "Absolute",
        CName18 : "Teach For America",
        CName19 : "Bill and Melinda Gates Foundation",
        CName20 : "United Nations Human Rights Council",

        CName21 : "Tesla",
        CName22 : "World Wildlife Fund",
        CName23 : "ZipCar ",
        CName24 : "Novozymes",
        CName25 : "Thought for Food",


        CName26 : "Ogilvy",
        CName27 : "Boston Dynamics ",
        CName28 : "Zappos",
        CName29 : "Pixar",

          selectHeart: false ,
          scompany: '',
          companies : [
            {
              key:  1,
              name: "Health Companies",
              data:  [
                {
                  id: 11,
                  cname: "Startup Health",
                  image: require("../../../assets/companies-card/Startup_health.png"),
                  select: false
                },
                {
                  id: 12,
                  cname: "Welbi",
                  image: require("../../../assets/companies-card/Group-2.png"),
                  select: false
                },
                {
                  id: 13,
                  cname: "CDC",
                  image: require("../../../assets/companies-card/cdc.jpg"),
                  select: false
                },
                {
                  id: 14,
                  cname: "Verge Genomics",
                  image: require("../../../assets/companies-card/verge.png"),
                  select: false
                },
                {
                  id: 15,
                  cname: "Headspace",
                  image: require("../../../assets/companies-card/head.png"),
                  select: false
                },  
              ]},
              {
                key:  2,
                name: "Economic Companies",
                data:  [
                  {
                    id: 16,
                    cname: "United Nation",
                    image: require("../../../assets/companies-card/unn.png"),
                    select: false
                  },
                  {
                    id: 17,
                    cname: "Acumen",
                    image: require("../../../assets/companies-card/a-hero-rev.png"),
                    select: false
                  },
                  {
                    id: 18,
                    cname: "WTO",
                    image: require("../../../assets/companies-card/wto.jpg"),
                    select: false
                  },
                  {
                    id: 19,
                    cname: "Y Combinator",
                    image: require("../../../assets/companies-card/yc.png"),
                    select: false
                  },
                  {
                    id: 20,
                    cname: "Peace Corps",
                    image: require("../../../assets/companies-card/peace.png"),
                    select: false
                  },  
                ]},
              {
                key: 3,
                name: "Technology Companies",
                data:  [
                  {
                    id: 21,
                    cname: "Element AI",
                    image: require("../../../assets/companies-card/E.png"),
                    select: false
                  },
                  {
                    id: 22,
                    cname: "Beyond Meat",
                    image: require("../../../assets/companies-card/bmm.jpg"),
                    select: false
                  },
                  {
                    id: 23,
                    cname: "IBM",
                    image: require("../../../assets/companies-card/IBM.jpeg"),
                    select: false
                  },
                  {
                    id: 24,
                    cname: "Oculus",
                    image: require("../../../assets/companies-card/or.jpg"),
                    select: false
                  },
                  {
                    id: 25,
                    cname: "NeuroPace",
                    image: require("../../../assets/companies-card/npl.png"),
                    select: false
                  },  
                ]},
                {
                  key: 4,
                  name: "Society Companies",
                  data:  [
                    {
                      id: 26,
                      cname: "Khan Academy",
                      image: require("../../../assets/companies-card/Khan.jpg"),
                      select: false
                    },
                    {
                      id: 27,
                      cname: "Absolute",
                      image: require("../../../assets/companies-card/ab.jpg"),
                      select: false
                    },
                    {
                      id: 28,
                      cname: "Teach For America",
                      image: require("../../../assets/companies-card/tfa.jpg"),
                      select: false
                    },
                    {
                      id: 29,
                      cname: "B & G Foundation",
                      image: require("../../../assets/companies-card/bill.jpg"),
                      select: false
                    },
                    {
                      id: 30,
                      cname: "UNHRC",
                      image: require("../../../assets/companies-card/unhrc.jpg"),
                      select: false
                    },  
                  ]},
                  {
                    key: 5,
                    name: "Environment Companies",
                    data:  [
                      {
                        id: 31,
                        cname: "Tesla",
                        image: require("../../../assets/companies-card/Tesla.jpg"),
                        select: false
                      },
                      {
                        id: 32,
                        cname: "World Wildlife Fund",
                        image: require("../../../assets/companies-card/wwf.png"),
                        select: false
                      },
                      {
                        id: 33,
                        cname: "ZipCar",
                        image: require("../../../assets/companies-card/zipp.png"),
                        select: false
                      },
                      {
                        id: 34,
                        cname: "Novozymes",
                        image: require("../../../assets/companies-card/novo.jpg"),
                        select: false
                      },
                      {
                        id: 35,
                        cname: "Thought for Food",
                        image: require("../../../assets/companies-card/ttf.jpg"),
                        select: false
                      },  
                    ]},
                    {
                      key: 6,
                      name: "Creative Companies",
                      data:  [
                        {
                          id: 36,
                          cname: "Ogilvy",
                          image: require("../../../assets/companies-card/og.png"),
                          select: false
                        },
                        {
                          id: 37,
                          cname: "Boston Dynamics",
                          image: require("../../../assets/companies-card/bd.jpg"),
                          select: false
                        },
                        {
                          id: 38,
                          cname: "Zappos",
                          image: require("../../../assets/companies-card/zap.png"),
                          select: false
                        },
                        {
                          id: 39,
                          cname: "Pixar",
                          image: require("../../../assets/companies-card/pix.jpg"),
                          select: false
                        }, 
                      ]},

              ]
      }

      this.selectCompany = this.selectCompany.bind(this);

    }

    selectCompany = (id) => {
      // o.name = (o.name === 'haert')? 'heart-o':'heart';
      // id.name = 'heart';
      var internal_data = this.state.companies;
      this.state.count+=1;
      internal_data.forEach(c => {
        c.data.forEach(cc => {
            if(cc.id == id.id){
              cc.select = true;
              cc.name = '11';
             // store to firebase
             console.log(cc);
              
              console.log('COUNTER: '+this.state.count);
              if(this.state.count === 3)
              {
                alert('Great! Now Navigate to the Profile');
              }
            } 
        });
      });
      // console.log(internal_data);
      this.setState({ companies: internal_data });
    }
  
    renderCompanies = () =>{
      return this.state.companies.map((item, i) => {
        if (i < 0) { return null; }
        return (
              <View key={ item.key } style={styles.secondrow}>
                <Text style={styles.titleCompany}>{ item.name }</Text>
                <ScrollView horizontal={true}>                    
                 { this.renderGroup(item.data) }
                </ScrollView>
              </View>
        );
      });
    }

    renderGroup = (data) => {
      return data.map((item, i) => {
        if (i < 0) {
         return null;
       }
       return ( <View key={ item.id } >
           <Image style={styles.card} source={ item.image } />
           <Text style={styles.titleText}>{ item.cname }</Text>
           <TouchableOpacity key={ item.id }  onPress={ () => this.selectCompany(item) }  >
              <Icon id={ "icon_" + item.id } 
                name={ (item.select == false )? 'heart-o' : 'heart' } 
                size={30} 
                style={styles.heartIcon} id={ item.id } 
              />
            </TouchableOpacity>
         </View>
       );
       });
    }

    render() {
 
      console.log('render called');
      // (this.state.selectHeart)? alert('hi'):null;
      return (
        
        <View style={styles.container}>
            <View style={styles.companies}>
        
            </View>
            <ScrollView vertical={true}>
                
                { this.renderCompanies() }

            </ScrollView> 
        </View>
      );
    }
  }


  
  export default unit2;
  