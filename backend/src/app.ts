console.log("hello!")
import express from "express";
import cors from "cors"
import controller from "../src/6-controller/booksControllers"
import catchAll from "../src/3-middleware/catch-all";
import appConfig from "../src/2-utils/appConfig";
import routeNotFound from "../src/3-middleware/route-NotFound";
import expressRateLimit from "express-rate-limit"
// import helmet from "helmet";
const server = express()


//Defened against Dos attack:
server.use("/api/",expressRateLimit({
    max:10,//maximum requests per same client
    windowMs:1000,// Time window to allow the max requests.
    message: "Are you a hacker?" // When performing more request - return this message
}));

// Helmet defense against malicious headers:
// server.use(helmet());

server.use(cors())

server.use(express.json())
server.use("/api",controller)
server.use("*",routeNotFound)
server.use(catchAll)

server.listen(appConfig.port , ()=>console.log(`Listenning on http://localhost:${appConfig.port}`))
