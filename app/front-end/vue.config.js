module.export = {
    devServer: {
        port: 3000,
        proxy: {
            '/api/*': {
                target: 'http://localhost:8080'
            }
        }
    }
}