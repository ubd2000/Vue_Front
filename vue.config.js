module.exports = {
    devServer: {
        overlay: false,
        port: 8083,
        proxy: {
            '/api': {
                target: 'http://localhost:8081',
                ws: true,
                changeOrigin: true,
                pathRewrite: {'^/api': ''}
            },
        }
    }
}