import extractFileExtension from '../utils/extractFileExtension'
import { getTimeDifferenceString } from '../utils/getTimeDifferenceString'
import { MainJsonContent } from './parseContent'

let emojiMap: { [key: string]: string } = {
	// main
	file: '📄',
	folder: '📁',
	parentDir: '🔙',
	// text
	pdf: '📕',
	pptx: '📇',
	odt: '📕',
	docx: '📕',
	doc: '📕',
	tex: '📕',
	bib: '📚',
	txt: '📜',
	me: '📢',
	md: '📢',
	// code
	java: '☕',
	jar: '🍯',
	htm: '🌐',
	html: '🌐',
	css: '🖌️',
	sh: '🐚',
	php: '💩',
	js: '💻',
	jsx: '💻',
	ts: '💻',
	tsx: '💻',
	py: '🐍',
	pl: '💻',
	hs: '💻',
	c: '💻',
	cpp: '💻',
	h: '💻',
	ppc64: '💻',
	st: '💻',
	idr: '💻',
	mjs: '💻',
	ipynb: '📓',
	r: '💻',
	// executables
	exe: '🚀',
	com: '💻',
	bat: '🦇',
	msi: '🔧',
	app: '📱',
	swf: '🕹️',
	// data
	csv: '📊',
	sql: '🗄️',
	db: '🗄️',
	xlsx: '📊',
	rmd: '🔍',
	json: '📋',
	xml: '📄',
	gnp: '📊',
	pcapng: '📡',
	config: '⚙️',
	properties: '⚙️',
	makefile: '⚙️',
	cabal: '⚙️',
	yaml: '⚙️',
	ipkg: '⚙️',
	gitignore: '🙈',
	// images
	png: '🖼️',
	jpeg: '🖼️',
	jpg: '🖼️',
	tif: '🖼️',
	gif: '🖼️',
	bmp: '🖼️',
	svg: '🖼️',
	pde: '🎨',
	// fonts
	psf: '🔡',
	ttf: '🔡',
	otf: '🔡',
	woff: '🔠',
	woff2: '🔠',
	eot: '🔡',
	// archives
	zip: '📦',
	'7z': '📦',
	rar: '📦',
	tar: '📦',
	gz: '📦',
	tgz: '📦',
	pcap: '📦',
	// video
	mp4: '📽',
	ogv: '📽',
	mov: '📽',
	mkv: '📽',
	m4v: '📽',
	wmv: '📽',
	// audio
	mp3: '🎧',
	ogg: '🎧',
	wav: '🎧',
	aac: '🎧',
	flac: '🎧',
	wma: '🎧',
	m4a: '🎧',
	mid: '🎹',
	// custom
	gol: '🎮', // game of life save
	out: '📤',
	in: '📥',
	pda: '🤖',
	manhattan: '🌆',
	astar: '⭐',
	csp: '🧩',
	thinking: '🧠',
	good: '✅',
	bad: '❌',
	fcfg: '👩‍🏫',
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
