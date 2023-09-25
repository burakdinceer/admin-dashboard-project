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
          img:'https://www.pexels.com/tr-tr/fotograf/siyah-murettebat-yaka-gomlekli-kadin-4918606/',
          email:'',
          amount:'',  
        },
        {
            id:2,
            img:'https://www.pexels.com/tr-tr/fotograf/adam-kisi-oturmak-sakal-13733384/',
            email:'',
            amount:'',  
          },
          {
            id:3,
            img:'https://www.pexels.com/tr-tr/fotograf/adam-kisi-ayakta-sigara-icmek-13710061/',
            email:'',
            amount:'',  
          },
          {
            id:4,
            img:'https://www.pexels.com/tr-tr/fotograf/adam-calismak-kaldirim-oturmak-14187834/',
            email:'',
            amount:'',  
          },
          {
            id:5,
            img:'https://www.pexels.com/tr-tr/fotograf/siyah-ve-beyaz-adam-portre-modu-sakal-17987791/',
            email:'',
            amount:'',  
          },
          {
            id:6,
            img:'https://www.pexels.com/tr-tr/fotograf/yashikoran-18338082/',
            email:'',
            amount:'',  
          },
          {
            id:7,
            img:'https://www.pexels.com/tr-tr/fotograf/gunes-gozlugu-takan-cekyatta-oturan-kadin-965324/',
            email:'',
            amount:'',  
          }

    ]
}

export const dataSlice = createSlice({
    name:'data',
    initialState,
    reducers:{

    }
})

export default dataSlice.reducer