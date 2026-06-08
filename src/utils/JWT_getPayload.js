export default function getPayload(token) {
	var payload = token.split('.')[1]	//get payload
	payload = payload.replace(/-/g, '+').replace(/_/g, '+')		// coput to base64 (was in base64URL)
	payload = atob(payload)		// back to normal string (but non ASCII char are not corectly translated)
	payload = payload
		.split('')		// list every single character
		// get the char code in base16,
		// then add 00 at the begining
		// get only last 2 char so that it's a 2 char code
		// add % so it can be decoded by URIComponent later
		.map(char => '%' + `00${char.charCodeAt(0).toString(16)}`.slice(-2))
		.join('')	// remake one single string
	payload = decodeURIComponent(payload)	// translate base16 to normal string
	payload = JSON.parse(payload)	// key-value are string, make it a js object

	return payload
}