export interface MainJsonContent {
	title: string
	sortLinks: SortLink[]
	fileLinks: FileLink[]
}

export interface SortLink {
	name: string
	url: string
}

export interface FileLink {
	description: string
	emoji: string
	lastModified: string
	name: string
	size: string
	url: string
}

// // Function to parse the HTML and extract relevant data into JSON format
export default function extractHtmlContentToJson(): MainJsonContent {
	let title = document.title
	let sortLinks = getSortLinks()
	let fileLinks = getFileLinks()

	return {
		title,
		sortLinks,
		fileLinks,
	}
}

function getFileLinks() {
	let fileLinks: FileLink[] = []

	const fileLinksHTML = document.querySelectorAll<HTMLTableRowElement>(
		'h1 + table tbody tr:nth-child(n+3)'
	)

	fileLinksHTML.forEach((row) => {
		const columns = row.querySelectorAll('td')

		if (columns.length >= 4) {
			const fileLink: FileLink = {
				url:
					columns[1].querySelector<HTMLAnchorElement>('a')?.href ||
					'',
				emoji: '',
				name:
					columns[1].querySelector<HTMLAnchorElement>('a')
						?.textContent || '',
				size: columns[3].textContent?.trim() || '',
				lastModified: columns[2].textContent?.trim() || '',
				description: columns[4].textContent?.trim() || '',
			}

			fileLinks.push(fileLink)
		}
	})

	return fileLinks
}

function getSortLinks() {
	let sortLinks: SortLink[] = []

	const sortLinksHTML = document.querySelectorAll(
		'h1 + table tbody tr:nth-child(1) th:nth-child(n+2) a'
	)

	sortLinksHTML.forEach((sortLinkItem) => {
		if (sortLinkItem.tagName === 'A') {
			let link: SortLink = {
				url: (sortLinkItem as HTMLAnchorElement).href,
				name: sortLinkItem.textContent || '',
			}

			if (link.name !== 'Description') {
				sortLinks.push(link)
			}
		}
	})

	return sortLinks
}
