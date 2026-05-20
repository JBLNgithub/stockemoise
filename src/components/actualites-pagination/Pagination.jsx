import topThePage from "../../utils/topThePage"


const Pagination = ({nbArticles, articlePerPage, setCurrentPage, currentPage}) => {
    const pages = []

    for(let i = 1; i<=Math.ceil(nbArticles/articlePerPage) ; i++) {
        pages.push(i)
    }

    const buttonClass = "py-2 px-4 mx-2 mt-6 rounded-xl hover:bg-blue-400 "
    const currentButtonClass = buttonClass + "bg-gray-900 text-neutral-200 hover:text-neutral-800"
    const otherButtonClass = buttonClass + "bg-blue-600 text-neutral-200 hover:text-neutral-800 text-center"

    const onClickButton = (page) => {
        setCurrentPage(page)
        topThePage()
    }

    return (
        <div>
            {pages.map((page, index) => {
                return <button key={index} onClick={() => {onClickButton(page)}} className={page == currentPage ? currentButtonClass : otherButtonClass}>{page}</button>
            })}
        </div>
    )
}

export default Pagination