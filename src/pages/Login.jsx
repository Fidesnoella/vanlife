import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { loginUser } from "../api";


export function loader({ request }) {
    return new URL(request.url).searchParams.get("message")
}


const Login = () => {
    const [loginFormData, setLoginFormData] = useState({ email: "", password: "" })
    const [status, setStatus] = useState("idle")
    const [error, setError] = useState(null)
    const message = useLoaderData()
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        setStatus("submitting")
        setError(null)
        loginUser(loginFormData)
            .then(data => { navigate("/host"), { replace: true } })
            .catch(err => setError(err))
            .finally(() => setStatus("idle"))
    }

    function handleChange(e) {
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }
    return (
        <div className="bg-[#FFF7ED] h-full flex flex-col justify-center">
            <div className="gap-10 md:gap-16 mx-auto flex flex-col w-full max-w-2xl items-center px-6">
                <h1 className="text-[#161616] font-bold text-3xl sm:text-4xl">Sign in to your account</h1>
                {message && <h2 className="-my-6 text-xl sm:text-2xl text-red-700 font-semibold">{message}</h2>}
                {error && <h2 className="-my-6 text-xl sm:text-2xl text-red-700 font-semibold">{error.message}</h2>}
                <form className="flex flex-col w-full" onSubmit={handleSubmit}>
                    <input type="email" name="email" placeholder="Email address" className="border border-[#D1D5DB] placeholder-[#4D4D4D] outline-none bg-white p-4 rounded-tr-md rounded-tl-md"
                        onChange={handleChange}
                        value={loginFormData.email}
                    />
                    <input type="password" name="password" placeholder="Password" className="border border-[#D1D5DB] placeholder-[#4D4D4D] outline-none bg-white p-4 rounded-br-md rounded-bl-md"
                        onChange={handleChange}
                        value={loginFormData.password}
                    />
                    <button className="bg-[#FF8C38] rounded-lg hover:bg-[#f8a56b] py-4 px-10 md:px-14 text-base md:text-lg font-bold leading-8 mt-8 text-white" disabled={status === "submitting"}>
                        {status === "submitting" ? "Logging in..." : "Log in"}
                    </button>
                </form>
                <p className="text-lg sm:text-xl">Don’t have an account? <span className="text-[#FF8C38] cursor-pointer font-semibold">Create one now</span></p>
            </div>
        </div>
    )
}

export default Login;