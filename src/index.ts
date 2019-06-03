import { urlencoded } from "body-parser";
import express from "express";
import fileUpload from "express-fileupload";
import xml from "xml";

const app = express();
app.use(urlencoded({ extended: false }));
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/uploads"
  })
);

app.post("/", ({ headers: { host } }, response) => {
  response.set("Content-Type", "application/xml");
  response.send(
    xml({
      Response: [
        {
          Record: [
            {
              _attr: {
                onData: `http://${host}/upload`,
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

app.post("/upload", ({ files }, response) => {
  console.log(files);
  response.send();
});

app.listen(3000);
