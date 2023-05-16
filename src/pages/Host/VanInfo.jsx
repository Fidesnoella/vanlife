import { useOutletContext } from "react-router-dom";

const VansDetail = () => {
    const vanData = useOutletContext()

    return (
        <main>
            <div className="flex flex-col gap-4 max-w-2xl">
                <p className="font-bold text-base sm:text-lg">Name: <span className="font-normal"> {vanData?.name}</span></p>
                <p className="font-bold text-base sm:text-lg">Category: <span className="font-normal"> {vanData?.type}</span></p>
                <p className="font-bold text-base sm:text-lg">Description: <span className="font-normal"> {vanData?.description}</span></p>
            </div>
        </main>
    );
}

export default VansDetail;