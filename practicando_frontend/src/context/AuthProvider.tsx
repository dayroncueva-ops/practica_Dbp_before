

import { useState } from "react";
import {AuthContext} from "./authContextValue";
import {login,register} from "../services/authService"

export function AuthProvider ({children}:{children:React.ReactNode}) {
    const [token, setToken] = useState<string|null>(()=>localStorage.getItem("token"));
    async function loginUser(data:{usernameOrEmail: string;
    password:string;}) {
        const response = await login (data);
        localStorage.setItem("token", response.token);
        setToken(response.token);
    }
    async function registerUser (data:{username: string; email: string; password:string;
    fullName: string;}) {
        localStorage.removeItem("token");
        const response = await register(data);
        localStorage.setItem("token", response.token);
        setToken(response.token);
    }
    function logout() {
        localStorage.removeItem("token")
        setToken(null);
        
    }
    const value= {
        token,
        isAuthenticated:Boolean(token),
        loginUser,
         registerUser,
        logout,
    };
    
    
    return <AuthContext.Provider value={value}>{children} </AuthContext.Provider>;
}