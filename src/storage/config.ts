// Function to save the configuration to chrome storage
export async function saveConfigBoolean(key: string, value: boolean) {
	await chrome.storage.sync.set({ [key]: value })
}

// Function to load the configuration from chrome storage
export async function loadConfigBoolean(key: string): Promise<boolean> {
	return new Promise<boolean>((resolve) => {
		chrome.storage.sync.get(key, (result) => {
			const configValue = result[key]
			if (configValue === undefined) {
				// If the key is not set, set it to true
				chrome.storage.sync.set({ [key]: true }, () => {
					resolve(true)
				})
			} else {
				resolve(configValue ?? false)
			}
		})
	})
}

// Function to save the string configuration to chrome storage
export async function saveConfigString(key: string, value: string) {
	await chrome.storage.sync.set({ [key]: value })
}

// Function to load the string configuration from chrome storage
export async function loadConfigString(
	key: string
): Promise<string | undefined> {
	return new Promise<string | undefined>((resolve) => {
		chrome.storage.sync.get(key, (result) => {
			const configValue = result[key]
			resolve(configValue)
		})
	})
}
