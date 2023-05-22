import { useLoaderData, Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { loginUser } from "../api";

export function loader({ request }) {
    return new URL(request.url).searchParams.get("message")
}

export async function action({ request }) {
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    const pathname = new URL(request.url).searchParams.get("redirectTo") || "/host"

    try {
        const data = await loginUser({ email, password })
        localStorage.setItem("loggedin", true)
        return redirect(pathname)
    } catch (err) {
        return err.message
    }
}

const Login = () => {
    const errorMessage = useActionData()
    const navigation = useNavigation()
    const message = useLoaderData()

    return (
        <div className="bg-[#FFF7ED] h-full flex flex-col text-center justify-center">
            <div className="gap-10 md:gap-16 mx-auto flex flex-col w-full max-w-2xl items-center px-6">
                <h1 className="text-[#161616] font-bold text-3xl sm:text-4xl">Sign in to your account</h1>
                {message && <h2 className="-my-6 text-xl sm:text-2xl text-red-700 font-semibold">{message}</h2>}
                {errorMessage && <h2 className="-my-6 text-xl sm:text-2xl text-red-700 font-semibold">{errorMessage}</h2>}
                <Form method="post" className="flex flex-col w-full" replace>
                    <input type="email" name="email" placeholder="Email address" className="border border-[#D1D5DB] placeholder-[#4D4D4D] outline-none bg-white p-4 rounded-tr-md rounded-tl-md"
                    />
                    <input type="password" name="password" placeholder="Password" className="border border-[#D1D5DB] placeholder-[#4D4D4D] outline-none bg-white p-4 rounded-br-md rounded-bl-md"
                    />
                    <button className="bg-[#FF8C38] rounded-lg hover:bg-[#f8a56b] py-4 px-10 md:px-14 text-base md:text-lg font-bold leading-8 mt-8 text-white" disabled={navigation.state === "submitting"}>
                        {navigation.state === "submitting" ? "Logging in..." : "Log in"}
                    </button>
                </Form>
                <p className="text-lg sm:text-xl">Don’t have an account?
                    <span className="text-[#FF8C38] cursor-pointer font-semibold"> Create one now</span>
                </p>
            </div>
        </div>
    )
}

export default Login;