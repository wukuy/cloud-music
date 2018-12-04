const dev = {
    baseUrl: 'http://localhost',
    port: 8212,
}

const prod = {
    baseUrl: 'http://localhost',
    port: 8212,
}

export default process.env.NODE_ENV === 'development' ? dev : prod;
