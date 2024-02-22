export default function overrideDoctype() {
	// Create a new doctype declaration
	const newDoctype = document.implementation.createDocumentType(
		'html',
		'',
		''
	)

	if (document.doctype?.parentNode) {
		document.doctype.parentNode.replaceChild(newDoctype, document.doctype)
	}
}
