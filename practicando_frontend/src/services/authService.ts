import api from '../api/axios';
import type {AuthResponse} from "../types/api";

interface RegisterBody {
    username: string;
    email: string;
    password:string;
    fullName: string;
}
interface LoginBody {
    usernameOrEmail: string;
    password:string;
}
export async function register (body:RegisterBody): Promise<AuthResponse> {
    const response = await api.post<AuthResponse>("/auth/register",body);
    return response.data;
}
export async function login (body:LoginBody): Promise<AuthResponse> {
    const response = await api.post<AuthResponse>("/auth/login",body);
    return response.data;
}
