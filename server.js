import express from 'express';

const app = express();

app.get( "/", async ( req, res ) => {
  res.send("HelloWorld");
});

app.listen(80, () => {
  console.log( `server running http://localhost` );
  console.log( `press CTRL+C to stop server` );
});