import extractHtmlContentToJson from './content/parseContent'
import addEmoji from './content/prettifyContent'
import generateHTML from './html/generateHTML'

let data = extractHtmlContentToJson()

data = addEmoji(data)

let newHTML = generateHTML(data)

document.documentElement.innerHTML = newHTML
