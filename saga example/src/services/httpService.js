export function addToCartService() {
    return setTimeout(() => {
        return new Promise((resolve, reject) => {
            resolve('success');  
        })
    }, 3000)    
}