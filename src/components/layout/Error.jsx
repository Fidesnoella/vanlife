import { useRouteError } from "react-router-dom"

const Error = () => {
    const error = useRouteError()
    return (
        <div className="max-w-7xl mx-auto  container p-20 font-bold">
            <h1 className="text-2xl">Error: {error.message}</h1>
            <pre className="text-xl">{error.status} - {error.statusText}</pre>
        </div>
    )
}

export default Error;