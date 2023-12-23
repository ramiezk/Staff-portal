import { Link } from "react-router-dom"
import TopBar from "../../components/top-bar/TopBar"

function Home() {
    return (
        <div className="h-screen w-screen flex flex-col">
            <TopBar />
            <div className="flex-1 flex flex-col gap-10 items-center justify-center">
                <Link to="/active-ideas" className="h-32 w-96 rounded-2xl shadow-xl border border-gray-100 text-themeGray flex items-center justify-center transition ease-in-out duration-500 hover:bg-themeGray hover:text-white hover:border-none">
                    <div className="text-3xl font-semibold">Active Ideas</div>
                </Link>
                <Link to="/research-ideas" className="h-32 w-96 rounded-2xl shadow-xl border border-gray-100 text-themeGray flex items-center justify-center transition ease-in-out duration-500 hover:bg-themeGray hover:text-white hover:border-none">
                    <div className="text-3xl font-semibold">Research Ideas</div>
                </Link>
            </div>
        </div>
    )
}

export default Home