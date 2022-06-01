import {createContext, useState} from "react";


export const AuthContext=createContext();

export const AuthProvider =({children})=> {

    const [isAuthorzed,setIsauthrized] =useState(false)

    const login =(username,password) => {
        if(username && password){
            setIsauthrized(true)
        }
    }

    const logout =() =>{
        setIsauthrized(false)
    };
    return
    (
        <AuthContext.Provider value={{isAuthorzed,login,logout}}>
    {children}
    </AuthContext.Provider>
    
    
        )
}






