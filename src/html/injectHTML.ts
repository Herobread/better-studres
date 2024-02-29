import { MainJsonContent } from '../content/parseContent'
import { addBetterDate, addEmoji } from '../content/prettifyContent'
import { loadConfigBoolean } from '../storage/config'
import generateHTML from './generateHTML'

export async function injectHtml(data: MainJsonContent) {
	// Load configuration
	const isEnabled = await loadConfigBoolean('isEnabled')
	const isEmoji = await loadConfigBoolean('isEmoji')
	const isBetterDates = await loadConfigBoolean('isBetterDates')

	// Apply transformations based on configuration
	if (isEnabled) {
		if (isEmoji) {
			data = addEmoji(data)
		}
		if (isBetterDates) {
			data = addBetterDate(data)
		}

		if (data.fileLinks.length !== 0 && data.sortLinks.length !== 0) {
			const newHTML = await generateHTML(data)
			document.documentElement.innerHTML = newHTML
		}
	}
}
