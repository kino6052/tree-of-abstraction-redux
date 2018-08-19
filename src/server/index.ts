import * as express from 'express';
const PORT = process.env.PORT || 3000;
const app = express();

app.use("/", express.static('../app'));
app.use("/", express.static('../static'));

app.listen(PORT, () => { console.log(`Listening on ${PORT}`) });
