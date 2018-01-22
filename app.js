import express from 'express'
import Schema from './src/schema'
import graphqlHTTP from 'express-graphql'

const app = express()
const port = 3000

app.use('/', graphqlHTTP({
    schema: Schema,
    graphiql: true
}));

const server = app.listen(port, function () {
  const addr = server.address();
  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
    console.log('Listening on ' + bind);
});