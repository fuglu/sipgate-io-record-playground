import { urlencoded } from "body-parser";
import express from "express";
import fileUpload from "express-fileupload";
import xml from "xml";

const app = express();
app.use(urlencoded({ extended: false }));
app.use(fileUpload());

app.post("/", (request, response) => {
  const from = request.body.from;
  const to = request.body.to;
  const direction = request.body.direction;

  console.log("from: " + from);
  console.log("to: " + to);
  console.log("direction: " + direction);

  response.set("Content-Type", "application/xml");
  response.send(
    xml({
      Response: [
        { Answer: null },
        {
          Record: [
            {
              _attr: {
                onData: "http://" + request.headers.host + "/upload",
                beep: true,
                duration: 120000
              }
            }
          ]
        }
      ]
    })
  );
});

app.post("/upload", (request, response) => {
  console.log(request.files);
  response.send();
});

app.listen(3000);
