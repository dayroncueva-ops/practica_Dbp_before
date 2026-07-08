import {Link, useNavigate} from "react-router-dom";
import {useAuth} from "../hooks/useAuth";
import {useAsyncAction} from "../hooks/useAsyncAction";

function Login () {
    const navigate = useNavigate();
    const {loginUser} = useAuth();
    const action = useAsyncAction("No se pudo registrar bb")

    async function handleLogin(e:React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const success = await action.execute (async()=> {
            await loginUser ({
                usernameOrEmail: String(form.get("usernameOrEmail")),
                password:String (form.get("password"))
            });
            return true;
        });
        if (success) navigate("/dashboard")
    }
    return (
        <main className="mx-auto max-w-md p-8">
            <h1 className="mb-6 text-2xl font-bold">

            </h1>
            <form className="space-y-4" onSubmit={handleLogin}>
                <div>
                    <label className="mb-1 block font-medium" htmlFor="usernameOrEmail">
                        UserNameOrEmail
                    </label>
                    <input className="w-full rounded border border-slate-300 px-3 py-2"
                    id="usernameOrEmail"
                    name="usernameOrEmail"
                    type="text"
                    placeholder="Dayron Cueva"
                    required />
                </div>
                <div>
                    <label className="mb-1 block font-medium" htmlFor="password">
                        Password
                    </label>
                    <input className="w-full rounded border border-slate-300 px-3 py-2"
                    id="password"
                    name="password"
                    type="password"
                    placeholder="dayron.cueva@utec.edu.pe"
                    required />
                </div>
              
                {action.error &&<p className="text-sm text-red-600"> {action.error} </p>}
                <button className="w.full rounded by-slate-900 px-4 py-2 text-white disabled:opacity-50"
                type="submit"
                disabled={action.loading}>
                    {action.loading ? "Registrando...":"Registrarse"}
                </button>
            </form>
            <p className="mt-4 text-sm">
                ¿Ya tienes una cuenta? <Link className="underline" to="/register">Register</Link>
            </p>
        </main>
    );
}
export default Login;