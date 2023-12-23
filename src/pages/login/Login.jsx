import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import bg_image from "../../assets/images/bg-image.png"

function Login() {

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className="h-screen w-screen grid grid-cols-2">
            <div className="flex items-center justify-center">
                <img src={bg_image} alt="staff-portal" style={{width: "25vw"}} />
            </div>
            <div className="flex flex-col gap-10 items-center justify-center">
                <div className="text-5xl font-semibold font-poppins text-themeGray">Welcome Back!</div>
                <div className="flex flex-col gap-5 w-8/12">
                    <div className="text-xl font-semibold font-sora text-themeDarkGray">Email</div>
                    <div className="h-16 w-full rounded-xl border border-themeGray flex items-center justify-center px-5">
                        <input type="email" value={email} onChange={(e) => {setEmail(e.target.value)}} placeholder="Enter your email" style={{outline: "none", width: "100%"}} />
                    </div>
                </div>
                <div className="flex flex-col gap-5 w-8/12">
                    <div className="text-xl font-semibold font-sora text-themeDarkGray">Password</div>
                    <div className="h-16 w-full rounded-xl border border-themeGray flex items-center justify-center px-5">
                        <input type="password" value={password} onChange={(e) => {setPassword(e.target.value)}} placeholder="Enter your password" style={{outline: "none", width: "100%"}} />
                    </div>
                </div>
                <div className="flex flex-row items-center justify-end gap-3 w-8/12">
                    <div className="text-lg font-semibold text-themeGray">Dont{"'"}t have an account?</div>
                    <Link to="/sign-up" className="text-lg font-semibold text-themeDarkGray">Signup</Link>
                </div>
                <button className="flex items-center justify-center h-16 w-8/12 rounded-xl bg-themeGray" onClick={() => {navigate("/home")}}>
                    <div className="text-2xl font-semibold text-white">Login</div>
                </button>
            </div>
        </div>
    )
}

export default Login