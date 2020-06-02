// https://dev.to/kryz/write-a-small-api-using-deno-1cl0

import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import {Document, DocumentRecord, ExtendedDocument, documentOfExtendedDocument} from "./document.ts";
import {documents } from "./documents.ts";
import {getDocuments} from "./handlers/getDocuments.ts"
import {getDocument} from "./handlers/getDocument.ts"
import {addDocument} from "./handlers/addDocument.ts"


// WEB SERVER

const env = Deno.env.toObject();
const PORT = env.PORT || 4000;
const HOST = env.HOST || "localhost";

const router = new Router();

router
  .get("/api/documents", getDocuments)
  .get("/api/document/:fileName", getDocument)
  .post("/api/documents", addDocument);
// .put('/dogs/:name', updateDog)
// .delete('/dogs/:name', removeDog)

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Listening on port ${PORT}...`);

await app.listen(`${HOST}:${PORT}`);
