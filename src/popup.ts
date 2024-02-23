import { loadConfig, saveConfig } from './storage/config'

// Function to handle checkbox changes
async function handleCheckboxChange(event: Event) {
	const checkbox = event.target as HTMLInputElement
	const key = checkbox.id
	const value = checkbox.checked
	await saveConfig(key, value)
}

// Function to initialize the popup
async function initializePopup() {
	const isEnabledCheckbox = document.getElementById(
		'isEnabled'
	) as HTMLInputElement
	isEnabledCheckbox.checked = await loadConfig('isEnabled')
	isEnabledCheckbox.addEventListener('change', handleCheckboxChange)

	const isEmojiCheckbox = document.getElementById(
		'isEmoji'
	) as HTMLInputElement
	isEmojiCheckbox.checked = await loadConfig('isEmoji')
	isEmojiCheckbox.addEventListener('change', handleCheckboxChange)

	const isBetterDatesCheckbox = document.getElementById(
		'isBetterDates'
	) as HTMLInputElement
	isBetterDatesCheckbox.checked = await loadConfig('isBetterDates')
	isBetterDatesCheckbox.addEventListener('change', handleCheckboxChange)
}

// Initialize the popup when the DOM content is loaded
document.addEventListener('DOMContentLoaded', initializePopup)
