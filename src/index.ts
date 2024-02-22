import extractHtmlContentToJson from './content/parseContent'
import { addBetterDate, addEmoji } from './content/prettifyContent'
import generateHTML from './html/generateHTML'

let data = extractHtmlContentToJson()

data = addEmoji(data)
data = addBetterDate(data)

if (data.fileLinks.length !== 0 && data.sortLinks.length !== 0) {
	let newHTML = generateHTML(data)

	document.documentElement.innerHTML = newHTML
}
