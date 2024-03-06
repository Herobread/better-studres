import extractHtmlContentToJson, {
	MainJsonContent,
} from './content/parseContent'

import { injectHtml } from './html/injectHTML'

let data: MainJsonContent

export async function main() {
	data = extractHtmlContentToJson()
	await injectHtml(data)
}

main()
