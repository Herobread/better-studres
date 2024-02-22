import { MainJsonContent } from '../content/parseContent'
import overrideDoctype from './overrideDoctype'

overrideDoctype()

let styles = `
* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
		Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
		sans-serif;
	font-size: 16px;

	/* outline: 1px solid black; */
}

*:focus-visible {
	outline: none;
	border: none;

	outline: 1px solid orange;
}

ul {
	list-style: none;
}

a {
	color: inherit;
	text-decoration: inherit;
	border-radius: 10px;
}

.title {
	font-weight: bold;
	font-size: 32px;
}

.main {
	max-width: 600px;
	width: 100%;
	margin: 50px auto;
	display: grid;
	gap: 30px;
}
/*
.main-grid {
	width: 100%;
	display: grid;
	gap: 5px;
}*/

.main-grid {
	width: 100%;
}

.main-grid-header-row {
	display: grid;
	padding: 0 10px;
	grid-template-columns: 3fr 200px 1fr;
}

.main-grid-header-row-item {
	padding: 10px 0;
	font-style: italic;
}

.main-grid-header-row-item:hover {
	text-decoration: underline;
}

.main-grid-item-row {
	padding: 15px 10px;
	display: grid;
	grid-template-columns: 3fr 200px 1fr;
	border-radius: 10px;
	transition: background-color 0.1s;
}

.main-grid-item-row:hover {
	background-color: #ededed;
}

.name {
	font-weight: bold;
}

`

export default function generateHTML(data: MainJsonContent): string {
	let output = `<!DOCTYPE html>
	<html lang="en">
		<head>
			<meta charset="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<title>${data.title}</title>
			<style>${styles}</style>
			</head>
			<body class="main">`

	output += `<div class="main-grid">`

	output += `<h1 class="title">${data.title}</h1>`

	output += `<div class="main-grid-header-row">`

	data.sortLinks.forEach((sortLink) => {
		const { name, url } = sortLink
		output += `<a class="main-grid-header-row-item" href="${url}">${name}</a>`
	})

	output += `</div>`

	output += `<hr/>`

	data.fileLinks.forEach((fileLink, i) => {
		const { emoji, lastModified, name, size } = fileLink

		output += `<a class="main-grid-item-row" href="/" tabindex="${i + 1}">
		<div class="name">${emoji + name}</div>
		<div class="last-modified">${lastModified}</div>
		<div class="size">${size}</div>
	</a>`
	})

	output += `</div>`

	output += `</body></html>`

	console.log(output)

	return output
}
