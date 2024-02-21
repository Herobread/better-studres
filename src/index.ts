import { aboba } from './test'

alert('aaasdasdasda')

aboba()

// const emojiMap = {
// 	file: '📄',
// 	back: '🔙',
// 	folder: '📁',
// 	'.pdf': '📚',
// }

// // Function to parse the HTML and extract relevant data into JSON format
// function parseHTMLToJSON() {
// 	const jsonResult = {
// 		title: '',
// 		topBar: {},
// 		files: [],
// 	}

// 	// Extract title
// 	jsonResult.title = document.title

// 	// Extract top bar data
// 	const topBarLinks = document.querySelectorAll(
// 		'h1 + table tbody tr:nth-child(1) th:nth-child(n+2) a'
// 	)
// 	topBarLinks.forEach((link) => {
// 		jsonResult.topBar[link.textContent] = link.href
// 	})

// 	// Extract file data
// 	const fileRows = document.querySelectorAll(
// 		'h1 + table tbody tr:nth-child(n+3)'
// 	)
// 	fileRows.forEach((row) => {
// 		const fileData = {}
// 		const columns = row.querySelectorAll('td')

// 		if (columns.length >= 4) {
// 			fileData.name = columns[1].querySelector('a').textContent
// 			fileData['last modified'] = columns[2].textContent.trim()
// 			fileData.size = columns[3].textContent.trim()
// 			fileData.description = columns[4].textContent.trim()

// 			jsonResult.files.push(fileData)
// 		}
// 	})

// 	return jsonResult
// }

// // Function to add emojis to file or folder names
// function addEmojis(data) {
// 	const result = { ...data } // Create a copy of the input data

// 	// Add emojis to each file or folder name
// 	result.files.forEach((file) => {
// 		const name = file.name.trim() // Remove any leading/trailing spaces
// 		const lastCharacter = name.charAt(name.length - 1)

// 		const extension = name.substring(name.lastIndexOf('.'))

// 		let emoji = emojiMap[extension] || emojiMap.file

// 		if (name == 'Parent Directory') {
// 			emoji = emojiMap.back
// 		}

// 		if (lastCharacter == '/') {
// 			emoji = emojiMap.folder
// 		}

// 		file.name = `${emoji} ${name}` // Add emoji before the name

// 		console.log(file.name)
// 	})

// 	return result
// }

// function insertCustomPage(data) {
// 	if (data.title == '' || data.title == null || data.title == undefined) {
// 		return
// 	}

// 	customHTML = `<div style="flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 30px; display: inline-flex">
// 		<div style="color: black; font-size: 32px; font-family: Segoe UI; font-weight: 700; word-wrap: break-word">
// 			${data.title}
// 		</div>
// 		<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px;">
//     <div style="padding: 10px; border-radius: 10px; display: flex; flex-direction: column;">
//         <div style="color: black; font-size: 16px; font-family: Segoe UI; font-style: italic; font-weight: 400; word-wrap: break-word;">Name</div>
//         <div style="color: black; font-size: 16px; font-family: Segoe UI; font-style: italic; font-weight: 400; word-wrap: break-word;">Last modified</div>
//         <div style="color: black; font-size: 16px; font-family: Segoe UI; font-style: italic; font-weight: 400; word-wrap: break-word;">Size</div>
//     </div>
//     <div style="padding: 10px; border-radius: 10px; display: flex; flex-direction: column;">
//         <div style="color: black; font-size: 16px; font-family: Segoe UI; font-weight: 700; word-wrap: break-word;">🔙 Parent directory</div>
//         <div style="color: black; font-size: 16px; font-family: Segoe UI; font-style: italic; font-weight: 400; word-wrap: break-word;">2 days ago</div>
//         <div style="color: black; font-size: 16px; font-family: Segoe UI; font-weight: 700; word-wrap: break-word;">-</div>
//     </div>
//     <div style="padding: 10px; border-radius: 10px; display: flex; flex-direction: column;">
//         <div style="color: black; font-size: 16px; font-family: Segoe UI; font-weight: 700; word-wrap: break-word;">📁 0-General</div>
//         <div style="color: black; font-size: 16px; font-family: Segoe UI; font-style: italic; font-weight: 400; word-wrap: break-word;">2 days ago</div>
//         <div style="color: black; font-size: 16px; font-family: Segoe UI; font-weight: 700; word-wrap: break-word;">-</div>
//     </div>
//     <div style="padding: 10px; border-radius: 10px; display: flex; flex-direction: column;">
//         <div style="color: black; font-size: 16px; font-family: Segoe UI; font-weight: 700; word-wrap: break-word;">☕ junit-4.13.2.jar</div>
//         <div style="color: black; font-size: 16px; font-family: Segoe UI; font-style: italic; font-weight: 400; word-wrap: break-word;">2 days ago</div>
//         <div style="color: black; font-size: 16px; font-family: Segoe UI; font-weight: 700; word-wrap: break-word;">-</div>
//     </div>
//     <div style="padding: 10px; border-radius: 10px; display: flex; flex-direction: column;">
//         <div style="color: black; font-size: 16px; font-family: Segoe UI; font-weight: 700; word-wrap: break-word;">📔 Relational-Model.pdf</div>
//         <div style="color: black; font-size: 16px; font-family: Segoe UI; font-style: italic; font-weight: 400; word-wrap: break-word;">2 days ago</div>
//         <div style="color: black; font-size: 16px; font-family: Segoe UI; font-weight: 700; word-wrap: break-word;">-</div>
//     </div>
// </div>

// 	</div>`

// 	// Create a new div element
// 	const newContent = document.createElement('div')

// 	// Set the inner HTML of the new div to your custom HTML
// 	newContent.innerHTML = customHTML

// 	// Replace the entire content of the page with the new div
// 	document.body.innerHTML = '' // Clear existing content
// 	document.body.appendChild(newContent)
// }

// // Execute the function and log the result
// let jsonData = parseHTMLToJSON()
// jsonData = addEmojis(jsonData)
// console.log(jsonData)

// insertCustomPage(jsonData)
