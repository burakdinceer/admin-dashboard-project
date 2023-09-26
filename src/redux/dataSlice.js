import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    loginData: [
        {id:1,name:'Burak',password:123},
        {id:2,name:'Ali',password:123},
        {id:3,name:'Veli',password:123},
        {id:4,name:'Ayşe',password:123},
        {id:5,name:'Tolga',password:123},

    ],

    topDealUsers:[
        {
          id:1,
          userName:'Burak Dinçer',
          img:'https://images.pexels.com/photos/965324/pexels-photo-965324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          email:'aaa@gmail.com',
          amount:'3.992',  
        },
        {
            id:2,
            userName:'Burak Dinçer',
            img:'https://images.pexels.com/photos/1205033/pexels-photo-1205033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            email:'aaa@gmail.com',
            amount:'4.232',  
          },
          {
            id:3,
            userName:'Burak Dinçer',
            img:'https://images.pexels.com/photos/1018911/pexels-photo-1018911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            email:'aaa@gmail.com',
            amount:'5.553',  
          },
          {
            id:4,
            userName:'Burak Dinçer',
            img:'https://images.pexels.com/photos/17987791/pexels-photo-17987791/free-photo-of-siyah-ve-beyaz-adam-portre-modu-sakal.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            email:'aaa@gmail.com',
            amount:'1.223',  
          },
          {
            id:5,
            userName:'Burak Dinçer',
            img:'https://images.pexels.com/photos/14187834/pexels-photo-14187834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            email:'aaa@gmail.com',
            amount:'4.112',  
          },
          {
            id:6,
            userName:'Burak Dinçer',
            img:'https://images.pexels.com/photos/13733384/pexels-photo-13733384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            email:'aaa@gmail.com',
            amount:'5.103',  
          },
          {
            id:7,
            userName:'Burak Dinçer',
            img:'https://images.pexels.com/photos/15213360/pexels-photo-15213360/free-photo-of-kisi-kadin-kamera-fotograf-cekmek.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            email:'aaa@gmail.com',
            amount:'2.349',  
          }

    ],
    chartBoxUser : {
      color: "#8884d8",
      icon: "/userIcon.svg",
      title: "Total Users",
      number: "11.238",
      dataKey: "users",
      percentage: 45,
      chartData: [
        { name: "Sun", users: 400 },
        { name: "Mon", users: 600 },
        { name: "Tue", users: 500 },
        { name: "Wed", users: 700 },
        { name: "Thu", users: 400 },
        { name: "Fri", users: 500 },
        { name: "Sat", users: 450 },
      ],
    },
     chartBoxProduct : {
      color: "skyblue",
      icon: "/productIcon.svg",
      title: "Total Products",
      number: "238",
      dataKey: "products",
      percentage: 21,
      chartData: [
        { name: "Sun", products: 400 },
        { name: "Mon", products: 600 },
        { name: "Tue", products: 500 },
        { name: "Wed", products: 700 },
        { name: "Thu", products: 400 },
        { name: "Fri", products: 500 },
        { name: "Sat", products: 450 },
      ],
    },
     chartBoxRevenue :{
      color: "teal",
      icon: "/revenueIcon.svg",
      title: "Total Revenue",
      number: "$56.432",
      dataKey: "revenue",
      percentage: -12,
      chartData: [
        { name: "Sun", revenue: 400 },
        { name: "Mon", revenue: 600 },
        { name: "Tue", revenue: 500 },
        { name: "Wed", revenue: 700 },
        { name: "Thu", revenue: 400 },
        { name: "Fri", revenue: 500 },
        { name: "Sat", revenue: 450 },
      ],
    },
    chartBoxConversion : {
      color: "gold",
      icon: "/conversionIcon.svg",
      title: "Total Ratio",
      number: "2.6",
      dataKey: "ratio",
      percentage: 12,
      chartData: [
        { name: "Sun", ratio: 400 },
        { name: "Mon", ratio: 600 },
        { name: "Tue", ratio: 500 },
        { name: "Wed", ratio: 700 },
        { name: "Thu", ratio: 400 },
        { name: "Fri", ratio: 500 },
        { name: "Sat", ratio: 450 },
      ],
    }
    
}

export const dataSlice = createSlice({
    name:'data',
    initialState,
    reducers:{

    }
})

export default dataSlice.reducer