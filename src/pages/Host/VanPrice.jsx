import { useOutletContext } from "react-router-dom";

const VanPrice = () => {
    const vanData = useOutletContext()

    return (
        <p className="font-bold text-base sm:text-lg">${vanData?.price}<span className="font-normal">/day</span></p>
    );
}

export default VanPrice;