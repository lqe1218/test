import { defineStore } from "pinia";

export default defineStore({
    id:"form",
    state:()=>{
        return{
            data:[{
                firstName:"Michelle",
                lastName:"Law",
                email:"123@gmail.com",
                countryCode:"+60",
                phoneNum:"0123456789",
                password:"*****",
                passwordConf:"*****",
                check1:true,
                check2:true
            }]
        }
    },
    actions:{
        addData(
            firstName:string,
            lastName: string, 
            email:string, 
            countryCode: string, 
            phoneNum:string,
            password:string,
            passwordConf:string,
            check1:boolean,
            check2:boolean
        ){
            this.data.push({
                firstName,
                lastName, 
                email, 
                countryCode, 
                phoneNum,
                password,
                passwordConf,
                check1,
                check2
            })
        }
    },
    getters:{
        getDataByEmail(state) {
            return (email: string) => state.data.find(data => data.email === email);
        }
    }
})