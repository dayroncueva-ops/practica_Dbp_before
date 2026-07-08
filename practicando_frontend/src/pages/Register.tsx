import {Link, useNavigate} from "react-router-dom";
import {useAuth} from "../hooks/useAuth";
import {useAsyncAction} from "../hooks/useAsyncAction";

function Register () {
    const navigate = useNavigate();
    const {registerUser} = useAuth();
    const action = useAsyncAction("No se pudo registrar bb")

    async function handleRegister(e:React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const success = await action.execute (async()=> {
            await registerUser ({
                username:String (form.get("username")),
                email:String (form.get("email")),
                password:String(form.get("password")),
                fullName:String(form.get("fullName"))
            });
            return true;
        });
        if (success) navigate("/dashboard")
    }
    return (
        <main className="mx-auto max-w-md p-8">
            <h1 className="mb-6 text-2xl font-bold">

            </h1>
            <form className="space-y-4" onSubmit={handleRegister}>
                <div>
                    <label className="mb-1 block font-medium" htmlFor="name">
                        Nombre
                    </label>
                    <input className="w-full rounded border border-slate-300 px-3 py-2"
                    id="name"
                    type="text"
                    placeholder="Dayron"
                    required />
                </div>
                <div>
                    <label className="mb-1 block font-medium" htmlFor="email">
                        Email
                    </label>
                    <input className="w-full rounded border border-slate-300 px-3 py-2"
                    id="email"
                    type="text"
                    placeholder="dayron.cueva@utec.edu.pe"
                    required />
                </div>
                <div>
                    <label className="mb-1 block font-medium" htmlFor="password">
                        Password
                    </label>
                    <input className="w-full rounded border border-slate-300 px-3 py-2"
                    id="password"
                    type="text"
                    placeholder="..."
                    required />
                </div>
                <div>
                    <label className="mb-1 block font-medium" htmlFor="fullName">
                        Nombre completo
                    </label>
                    <input className="w-full rounded border border-slate-300 px-3 py-2"
                    id="fullName"
                    type="text"
                    placeholder="Dayron Cueva Loayza"
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
                ¿Ya tienes una cuenta? <Link className="underline" to="/login">Iniciar Sesion</Link>
            </p>
        </main>
    );
}
export default Register;