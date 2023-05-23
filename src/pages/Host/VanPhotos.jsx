import { useOutletContext } from "react-router-dom";

const VanPhotos = () => {
    const vanData = useOutletContext()

    return (
        <img src={vanData?.imageUrl} alt="" className="w-56" />
    );
}

export default VanPhotos;