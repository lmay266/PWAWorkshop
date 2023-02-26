//Register sevice worker
//Check if service worker is supported

if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js')
    .then(reg => {
        console.info('Service worker reg ', reg)
    })
    .catch( err =>{
        console.error('Fail to register service worker ', err)
    })
}else{
    console.info('Service Worker is not supported.')
}