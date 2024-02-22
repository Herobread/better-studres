export default function extractFileExtension(name: string): string {
	if (name === 'Parent Directory') {
		return 'parentDir'
	}

	if (name.endsWith('/')) {
		return 'folder'
	}

	const parts = name.split('.')

	if (parts.length === 1) {
		return 'file'
	}

	const extension = parts[parts.length - 1]

	return extension
}
