import React from "react";
import { useContext } from "react";


export interface AuthContexTypes {
    isAuthenticated: boolean;
    user:any;
    addUserFunction:(value:any)=>void;
    setIsAuthenticated:React.Dispatch<React.SetStateAction<boolean>>
}

const AuthContextValues:AuthContexTypes = {
    isAuthenticated: false,
    user: undefined,
    addUserFunction:()=>{},
    setIsAuthenticated:()=> {}
}


export const Authcontext = React.createContext<AuthContexTypes>(
    AuthContextValues
);
export const useAuthContext = ()=> useContext(Authcontext)