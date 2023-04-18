import resolvers from './graphql/index.js'
//import { createServer  } from 'http'
//import { createSchema, createYoga } from 'graphql-yoga'
import { GraphQLServer } from 'graphql-yoga'
import path from 'path'
import { fileURLToPath } from 'url'

// Este codigo sirve cuando usamos type module en el package.json para poder usar sus funciones nativas 
// ******** fix ********
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
// ******** fix ********



const server = new GraphQLServer({
    typeDefs: path.join(__dirname, "graphql/schema.graphql"), 
    resolvers: resolvers // Mapea la ruta Absoluta y concatena la direccion del archivo 
})

// Relativas --> /graphql-yoga-2.0

// Absolutas --> /c/Users/Rafael Ramos/Documents/Dev.f/full_stack/graphql-yoga-2.0

export default server

/*
const server = new createServer(
    createYoga({
        schema: createSchema({
            typeDefs: path.join(__dirname, "graphql/schema.graphql"),resolvers
        })
    })
)

const schema = createSchema({
    typeDefs: path.join(__dirname, "graphql/schema.graphql"),resolvers
})

const yoga = createYoga(schema)

const server = createServer(yoga)
*/