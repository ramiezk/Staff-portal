import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import { ArrowUpRightIcon } from "@heroicons/react/24/solid"

function FeaturedBlogCard({id, image, name, date, title, content, tags}) {
    return (
        <div className="w-full grid grid-cols-2 gap-10">
            <img src={image} alt="blog-image" style={{width: "100%"}} />
            <div className="flex flex-col gap-3">
                <div className="flex flex-row gap-2 items-center">
                    <div className="text-themeDarkGray font-semibold">{name}</div>
                    <div className="h-2 w-2 rounded-full bg-themeDarkGray" />
                    <div className="text-themeDarkGray font-semibold">{date}</div>
                </div>
                <div className="flex flex-row items-center justify-between w-full">
                    <div className="text-2xl font-semibold">{title}</div>
                    <Link to={`/blog?id=${id}`}>
                        <ArrowUpRightIcon className="h-6 w-6 text-black" />
                    </Link>
                </div>
                <div className="text-themeDarkGray">{content}</div>
                <div className="flex flex-row gap-2 items-center mt-5">
                    {tags?.map((item, key) => {
                        return (
                            <div className={`text-themeDarkGray h-7 px-3 flex items-center justify-center rounded-full`} style={{backgroundColor: item?.color}} key={key}>{item?.name}</div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default FeaturedBlogCard

FeaturedBlogCard.propTypes = {
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired
}