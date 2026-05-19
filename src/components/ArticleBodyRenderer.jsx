import { marked } from 'marked'
import DOMPurify from 'dompurify'


const ArticleBodyRenderer = ({content}) => {
    const HTML = marked.parse(content)
    console.log(HTML)
    const sanitazedHTML = DOMPurify.sanitize(HTML)
    const innerHTML = {__html: sanitazedHTML}

    return (
        <div dangerouslySetInnerHTML={innerHTML} className='articleBody'></div>
    )
}

export default ArticleBodyRenderer