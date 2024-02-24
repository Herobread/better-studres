// Function to save the configuration to chrome storage
export async function saveConfig(key: string, value: boolean) {
	await chrome.storage.sync.set({ [key]: value })
}

// Function to load the configuration from chrome storage
export async function loadConfig(key: string): Promise<boolean> {
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
