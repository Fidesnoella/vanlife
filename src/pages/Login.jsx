const Login = () => {
    return (
        <div className="bg-[#FFF7ED] h-full flex flex-col justify-center">
            <div className="gap-10 md:gap-16 mx-auto flex flex-col w-full max-w-2xl items-center px-6">
                <h1 className="text-[#161616] font-bold text-3xl sm:text-4xl">Sign in to your account</h1>
                <div className="flex flex-col w-full">
                    <input type="email" name="" placeholder="Email address" className="border border-[#D1D5DB] placeholder-[#4D4D4D] outline-none bg-white p-4 rounded-tr-md rounded-tl-md" />
                    <input type="password" name="" placeholder="Password" className="border border-[#D1D5DB] placeholder-[#4D4D4D] outline-none bg-white p-4 rounded-br-md rounded-bl-md" />
                    <button className="bg-[#FF8C38] rounded-lg hover:bg-[#f8a56b] py-4 px-10 md:px-14 text-base md:text-lg font-bold leading-8 mt-8 text-white">Sign in</button>
                </div>
                <p className="text-lg sm:text-xl">Don’t have an account? <span className="text-[#FF8C38] cursor-pointer font-semibold">Create one now</span></p>
            </div>
        </div>
    )
}

export default Login;