import extractHtmlContentToJson from './content/parseContent'
import addEmoji from './content/prettifyContent'
import generateHTML from './html/generateHTML'

let data = extractHtmlContentToJson()

data = addEmoji(data)

if (data.fileLinks.length !== 0 && data.sortLinks.length !== 0) {
	let newHTML = generateHTML(data)

	document.documentElement.innerHTML = newHTML
}
