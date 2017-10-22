const dev = {
	host: 'http://localhost:3000'
}
const prod = {
	host: 'http://localhost:3000'
}

let config
if (process.env.NODE_ENV === 'development') {
	config = dev
} else if (process.env.NODE_ENV === 'production') {
	config = prod
}

export default config
