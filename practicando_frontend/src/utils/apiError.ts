import axios from "axios";
import type {ErrorResponse} from "../types/api";

export function getApiErrorMessage (error:unknown,fallback:string):string {
    if (axios.isAxiosError<ErrorResponse>(error)) {
        const status = error.response?.status;
        const apiMessage = error.response?.data?.message??error.response?.data?.error;
        if (apiMessage) return apiMessage;
        if (status===400) return "";
        if (status===400) return "";
        if (status===400) return "";
        if (error.code==="ErrNetwork") return "Vreirifca que spring boot corre"
        return fallback;
    }
    return "ocurrio un error inesperado";
}