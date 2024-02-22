import extractFileExtension from '../utils/extractFileExtension'
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

export default function addEmoji(content: MainJsonContent): MainJsonContent {
	let fileLinks = content.fileLinks

	for (let i = 0; i < fileLinks.length; i++) {
		const fileLink = fileLinks[i]

		let extension = extractFileExtension(fileLink.name)

		fileLinks[i].emoji = emojiMap[extension] || emojiMap.file
	}

	content.fileLinks = fileLinks

	return content
}
