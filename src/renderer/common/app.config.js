const dev = {
    baseUrl: 'http://cloud-music.local.wukuy.cn',
    port: '',
}

const prod = {
    baseUrl: 'http://cloud-music.local.wukuy.cn',
    port: '',
}

export default process.env.NODE_ENV === 'development' ? dev : prod;
