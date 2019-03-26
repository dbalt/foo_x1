const fn_trimEx = x => {
    let res = x.trim()
    if (res.charAt(0) === '"' && res.charAt(res.length - 1) === '"') {
        res = res.slice(1, res.length - 1)
    }
    return res
}


export {fn_trimEx}