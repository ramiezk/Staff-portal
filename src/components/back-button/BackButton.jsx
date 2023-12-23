import { useNavigate } from "react-router-dom"
import { ChevronLeftIcon } from "@heroicons/react/24/solid"

function BackButton() {

    const navigate = useNavigate()

    return (
        <button className="h-10 w-10 flex items-center justify-center rounded-full bg-themeDarkGray" onClick={() => {navigate(-1)}}>
            <ChevronLeftIcon className="h-7 w-7 text-white" />
        </button>
    )
}

export default BackButton