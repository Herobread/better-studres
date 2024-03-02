import { loadConfigString } from '../storage/config'

export interface JumpToLink {
	name: string
	url: string
}

const BASE_URL = 'https://studres.cs.st-andrews.ac.uk/'
const rootLink: JumpToLink = {
	name: 'root',
	url: BASE_URL,
}

export async function getJumpToLinks(): Promise<JumpToLink[]> {
	let links: JumpToLink[] = []

	const defaultJumpToInputValue = 'root, CS1003, CS1006'

	let userLinksString =
		(await loadConfigString('jumpTo')) || defaultJumpToInputValue

	// remove 1st '/' and spaces
	let userLinks = userLinksString.replace(/^\/?|\/$/g, '').replace(/\s/g, '')

	let userLinksArray = userLinks.split(',')

	userLinksArray.forEach((link) => {
		if (link === 'root') {
			links.push(rootLink)
		} else {
			links.push({
				name: link,
				url: BASE_URL + link,
			})
		}
	})

	return links
}
