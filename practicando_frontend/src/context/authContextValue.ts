import { createContext } from "react";
interface LoginData {
    usernameOrEmail: string;
    password:string;
}
interface RegisterData {
    username: string;
    email: string;
    password:string;
    fullName: string;
}
export interface AuthContextValue{
    token: string|null;
    isAuthenticated:boolean;
    registerUser: (data:RegisterData)=>Promise<void>;
    loginUser:(data:LoginData)=>Promise<void>;
    logout:()=>void;
}
export const AuthContext = createContext <AuthContextValue|null>(null);