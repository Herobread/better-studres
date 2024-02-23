// Function to save the configuration to chrome storage
export async function saveConfig(key: string, value: boolean) {
	await chrome.storage.sync.set({ [key]: value })
}

// Function to load the configuration from chrome storage
export async function loadConfig(key: string): Promise<boolean> {
	return new Promise<boolean>((resolve) => {
		chrome.storage.sync.get(key, (result) => {
			resolve(result[key] ?? false)
		})
	})
}
