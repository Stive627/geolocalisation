module.exports =  function fetchUrl(url, callback){
    fetch(url).then((value) => value.json()).then(callback)
    .catch((err) => console.error(err))
}