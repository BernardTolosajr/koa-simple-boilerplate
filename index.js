import server from './server'

const port = 3000;
server.listen(port, () => console.log(`API server started on ${port}`))
