import { useState } from "react"
import { useNavigate } from "react-router"
import bg_image from "../../assets/images/bg-image.png"

function Signup() {

    const navigate = useNavigate()

    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")

    return (
        <div className="h-screen w-screen grid grid-cols-2">
            <div className="flex items-center justify-center">
                <img src={bg_image} alt="staff-portal" style={{width: "25vw"}} />
            </div>
            <div className="flex flex-col gap-5 items-center justify-center">
                <div className="text-5xl font-semibold font-poppins text-themeGray">Welcome!</div>
                <div className="flex flex-col gap-5 w-8/12">
                    <div className="text-xl font-semibold font-sora text-themeDarkGray">Full Name</div>
                    <div className="h-16 w-full rounded-xl border border-themeGray flex items-center justify-center px-5">
                        <input type="text" value={fullName} onChange={(e) => {setFullName(e.target.value)}} placeholder="Enter your full name" style={{outline: "none", width: "100%"}} />
                    </div>
                </div>
                <div className="flex flex-col gap-5 w-8/12">
                    <div className="text-xl font-semibold font-sora text-themeDarkGray">Email</div>
                    <div className="h-16 w-full rounded-xl border border-themeGray flex items-center justify-center px-5">
                        <input type="email" value={email} onChange={(e) => {setEmail(e.target.value)}} placeholder="Enter your email" style={{outline: "none", width: "100%"}} />
                    </div>
                </div>
                <div className="flex flex-col gap-5 w-8/12">
                    <div className="text-xl font-semibold font-sora text-themeDarkGray">Password</div>
                    <div className="h-16 w-full rounded-xl border border-themeGray flex items-center justify-center px-5">
                        <input type="password" value={password} onChange={(e) => {setPassword(e.target.value)}} placeholder="Enter new password" style={{outline: "none", width: "100%"}} />
                    </div>
                </div>
                <div className="flex flex-col gap-5 w-8/12">
                    <div className="text-xl font-semibold font-sora text-themeDarkGray">Phone Number</div>
                    <div className="h-16 w-full rounded-xl border border-themeGray flex items-center justify-center px-5">
                        <input type="text" value={phoneNumber} onChange={(e) => {setPhoneNumber(e.target.value)}} placeholder="Enter your phone number" style={{outline: "none", width: "100%"}} />
                    </div>
                </div>
                <button className="flex items-center justify-center h-16 w-8/12 mt-5 rounded-xl bg-themeGray" onClick={() => {navigate("/")}}>
                    <div className="text-2xl font-semibold text-white">Create An Account</div>
                </button>
            </div>
        </div>
    )
}

export default Signup