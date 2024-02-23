import { MainJsonContent } from '../content/parseContent'
import { addBetterDate, addEmoji } from '../content/prettifyContent'
import { loadConfig } from '../storage/config'
import generateHTML from './generateHTML'

export async function injectHtml(data: MainJsonContent) {
	// Load configuration
	const isEnabled = await loadConfig('isEnabled')
	const isEmoji = await loadConfig('isEmoji')
	const isBetterDates = await loadConfig('isBetterDates')

	// Apply transformations based on configuration
	if (isEnabled) {
		if (isEmoji) {
			data = addEmoji(data)
		}
		if (isBetterDates) {
			data = addBetterDate(data)
		}

		if (data.fileLinks.length !== 0 && data.sortLinks.length !== 0) {
			const newHTML = generateHTML(data)
			document.documentElement.innerHTML = newHTML
		}
	}
}
