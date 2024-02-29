import {
	loadConfigBoolean,
	loadConfigString,
	saveConfigBoolean,
	saveConfigString,
} from './storage/config'

// Function to handle checkbox changes
async function handleCheckboxChange(event: Event) {
	const checkbox = event.target as HTMLInputElement
	const key = checkbox.id
	const value = checkbox.checked
	await saveConfigBoolean(key, value)
}

// Function to handle string input changes
async function handleInputChange(event: Event) {
	const inputField = event.target as HTMLInputElement
	const key = inputField.id
	const value = inputField.value
	await saveConfigString(key, value)
}

// Function to initialize the popup
async function initializePopup() {
	const isEnabledCheckbox = document.getElementById(
		'isEnabled'
	) as HTMLInputElement
	isEnabledCheckbox.checked = await loadConfigBoolean('isEnabled')
	isEnabledCheckbox.addEventListener('change', handleCheckboxChange)

	const isEmojiCheckbox = document.getElementById(
		'isEmoji'
	) as HTMLInputElement
	isEmojiCheckbox.checked = await loadConfigBoolean('isEmoji')
	isEmojiCheckbox.addEventListener('change', handleCheckboxChange)

	const isBetterDatesCheckbox = document.getElementById(
		'isBetterDates'
	) as HTMLInputElement
	isBetterDatesCheckbox.checked = await loadConfigBoolean('isBetterDates')
	isBetterDatesCheckbox.addEventListener('change', handleCheckboxChange)

	const jumpToInput = document.getElementById('jumpTo') as HTMLInputElement
	jumpToInput.value =
		(await loadConfigString('jumpTo')) || 'root, CS1003, CS1006'
	jumpToInput.addEventListener('change', handleInputChange)
}

// Initialize the popup when the DOM content is loaded
document.addEventListener('DOMContentLoaded', initializePopup)
