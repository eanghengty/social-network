import { createContext } from "react";
//share object with the component that listen to it
export  const authContext = createContext({isLogin:false,login:(()=>{}),logout:(()=>{})})

