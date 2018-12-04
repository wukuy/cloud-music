import Http from '@common/app.http.js';

let getxxx = () => Http({
    url: '/search?keywords=海阔天空'
})


export {
    getxxx
}
