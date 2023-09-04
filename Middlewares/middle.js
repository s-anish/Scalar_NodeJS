function MyMiddleware(req, res,next){
    console.log('custom middleware')
    next()
}

module.exports = MyMiddleware