import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid"
import save_tag from "../../assets/icons/save-tag.png"

function BlogCard({id, profile_image, name, date, title, content, tag, read_time, image}) {
    return (
        <div className="w-full flex flex-row gap-5">
            <div className="w-full flex flex-col gap-3">
                <div className="flex flex-row gap-2 items-center">
                    <img src={profile_image} alt="profile" className="rounded-full overflow-hidden" style={{height: "30px", width: "30px"}} />
                    <div className="font-extralight">{name}</div>
                    <div className="h-1 w-1 rounded-full bg-themeDarkGray" />
                    <div className="text-themeGray font-extralight">{date}</div>
                </div>
                <Link to={`/blog?id=${id}`} className="w-full flex flex-col gap-3">
                    <div className="text-xl">{title}</div>
                    <div className="font-extralight text-sm">{content}</div>
                </Link>
                <div className="flex flex-row items-center justify-between mt-5">
                    <div className="flex flex-row items-center gap-2">
                        <div className="h-5 px-3 rounded-full flex items-center justify-center bg-themeLightGray text-xs font-extralight">{tag}</div>
                        <div className="text-sm font-extralight text-themeGray">{read_time} read</div>
                        <div className="h-1 w-1 rounded-full bg-themeGray" />
                        <div className="text-sm font-extralight text-themeGray">Selected for you</div>
                    </div>
                    <div className="flex flex-row items-center gap-3">
                        <img src={save_tag} alt="save" style={{height: "25px"}} />
                        <EllipsisHorizontalIcon className="h-8 w-8 text-black" />
                    </div>
                </div>
            </div>
            <img src={image} alt="blog-image" style={{height: "150px", width: "150px"}} />
        </div>
    )
}

export default BlogCard

BlogCard.propTypes = {
    id: PropTypes.number.isRequired,
    profile_image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    read_time: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
}