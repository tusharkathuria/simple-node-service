import express from 'express';

const app = express();

app.get( "/", async ( req, res ) => {
  res.send("HelloWorld");
});

app.listen(8080, () => {
  console.log( `server running http://localhost:8080` );
  console.log( `press CTRL+C to stop server` );
});