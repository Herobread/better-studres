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

	let userLinksString = await loadConfigString('jumpTo')
	let userLinks = '' // cleanup: remove spaces and slashes

	if (!userLinksString) {
		return [rootLink]
	}

	// remove 1st '/' and spaces
	userLinks = userLinksString.replace(/^\/?|\/$/g, '').replace(/\s/g, '')

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
