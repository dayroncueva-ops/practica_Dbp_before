import { useContext } from "react";
import {AuthContext} from "../context/authContextValue";
export function useAuth () {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error ("errorrr, usar useAuth usar dentro de Authrpvider")
    }
    return context;
}