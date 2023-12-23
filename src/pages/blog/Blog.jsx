import { useLocation } from "react-router-dom"
import TopBar from "../../components/top-bar/TopBar"
import Header from "../../components/header/Header"
import bg_image from "../../assets/images/blog-bg-image.png"
import facebook_logo from "../../assets/icons/facebook.png"
import twitter_logo from "../../assets/icons/twitter.png"
import instagram_logo from "../../assets/icons/instagram.png"

function Blog() {

    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)
    const id = queryParams.get('id')

    console.log(id)

    return (
        <div className="h-screen w-screen flex flex-col items-center">
            <TopBar />
            <Header title="Blog" />
            <div className="w-[95%] my-10 flex-1 flex flex-col gap-20 items-center overflow-y-auto scrollbar-none">
                <img src={bg_image} alt="image" style={{width: "100%"}} />
                <div className="text-xl font-extralight">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula nibh, interdum non enim sit amet, iaculis aliquet nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam sit amet ipsum ac velit egestas ultrices. Vestibulum et neque id ex semper varius a sit amet metus. Vivamus congue dolor eget aliquam hendrerit. Etiam iaculis finibus egestas. Nam viverra urna quis odio efficitur malesuada. Maecenas rhoncus enim eu scelerisque rutrum. Pellentesque et mollis enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed commodo leo. Suspendisse potenti. Maecenas gravida ipsum placerat ligula posuere, ut rhoncus velit eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula nibh, interdum non enim sit amet, iaculis aliquet nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam sit amet ipsum ac velit egestas ultrices. Vestibulum et neque id ex semper varius a sit amet metus. Vivamus congue dolor eget aliquam hendrerit. Etiam iaculis finibus egestas. Nam viverra urna quis odio efficitur malesuada. Maecenas rhoncus enim eu scelerisque rutrum. Pellentesque et mollis enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed commodo leo. Suspendisse potenti. Maecenas gravida ipsum placerat ligula posuere, ut rhoncus velit eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula nibh, interdum non enim sit amet, iaculis aliquet nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam sit amet ipsum ac velit egestas ultrices. Vestibulum et neque id ex semper varius a sit amet metus. Vivamus congue dolor eget aliquam hendrerit. Etiam iaculis finibus egestas. Nam viverra urna quis odio efficitur malesuada. Maecenas rhoncus enim eu scelerisque rutrum. Pellentesque et mollis enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed commodo leo. Suspendisse potenti. Maecenas gravida ipsum placerat ligula posuere, ut rhoncus velit eleifend.</div>
                <div className="w-full flex flex-row items-center justify-between">
                    <div className="flex flex-row gap-5 items-center">
                        <div className="text-3xl font-semibold font-sora">Share this</div>
                        <img src={facebook_logo} alt="facebook" style={{height: "35px"}} />
                        <img src={twitter_logo} alt="twitter" style={{height: "35px"}} />
                        <img src={instagram_logo} alt="instagram" style={{height: "35px"}} />
                    </div>
                    <div className="flex flex-row items-center gap-5">
                        <div className="text-xl font-semibold text-themeDarkGray h-10 px-5 rounded-full bg-themeLightGray flex items-center justify-center">design</div>
                        <div className="text-xl font-semibold text-themeDarkGray h-10 px-5 rounded-full bg-themeLightGray flex items-center justify-center">web</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog