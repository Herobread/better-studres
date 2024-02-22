import extractFileExtension from '../utils/extractFileExtension'
import { getTimeDifferenceString } from '../utils/getTimeDifferenceString'
import { MainJsonContent } from './parseContent'

let emojiMap: { [key: string]: string } = {
	// main
	file: '📜',
	folder: '📁',
	parentDir: '🔙',
	// files
	pdf: '📕',
	// code
	java: '☕',
	jar: '🍯',
	html: '🌐',
	css: '🖌️',
	config: '⚙️',
	sh: '💻',
	out: '📦',
	json: '📋',
	xml: '📄',
	// images
	png: '🖼️',
	jpeg: '🖼️',
	jpg: '🖼️',
}

export function addEmoji(content: MainJsonContent): MainJsonContent {
	let fileLinks = content.fileLinks

	for (let i = 0; i < fileLinks.length; i++) {
		const fileLink = fileLinks[i]

		let extension = extractFileExtension(fileLink.name)

		fileLinks[i].emoji = emojiMap[extension] || emojiMap.file
	}

	content.fileLinks = fileLinks

	return content
}

export function addBetterDate(content: MainJsonContent): MainJsonContent {
	let fileLinks = content.fileLinks
	let now = new Date()

	for (let i = 0; i < fileLinks.length; i++) {
		const fileLink = fileLinks[i]

		let lastModified = fileLink.lastModified
		let lastModifiedDate = new Date(lastModified)

		fileLinks[i].lastModified = getTimeDifferenceString(
			lastModifiedDate,
			now
		)
	}

	content.fileLinks = fileLinks

	return content
}
