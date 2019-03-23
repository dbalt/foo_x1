import axios from 'axios'


const api_affix = 'apix1'

/* remote: */
//const server = '/' + apix1


/* electron : */
// const server = 'http://10.76.65.143:8083/' + apix1
//

/* dev : */
const server = 'http://localhost:8093/' + apix1
const esc = encodeURIComponent

const fn_isIe = () => {
    return (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > 0)
}

class Api {
    constructor(urlPrefix) {
        this.urlPrefix = urlPrefix
    }

    create_url(url) {
        return this.urlPrefix + url
    }

    get(url) {

        let _url = url
        if (fn_isIe()) {
            // IE caches similar requests, thats why we have to add current timestamp to url
            let timeStamp = (new Date()).getTime()
            _url = _url + ((_url.indexOf('?') > 0) ? '' : '?') + '&timeStamp=' + esc(timeStamp)
        }

        let p = axios.get(this.create_url(_url), {withCredentials: true,}).then(r => r.data)
        return p
    }

    post(url, data = {}) {

        let fd = new FormData()
        for (let k in data) {
            fd.append(k, data[k])
        }

        if (fn_isIe()) {
            // to fool IE cacheing
            fd.append('timeStamp', (new Date()).getTime())
        }

        return this.postFd(url, fd)
    }

    postFd(url, fd) {
        let p = axios({
            method: 'post',
            url: this.create_url(url),
            data: fd,
            withCredentials: true,
        }).then(r => r.data)
        return p
    }

}

const fetcher = new Api(server)
export default fetcher
export {fn_isIe, fetcher}
