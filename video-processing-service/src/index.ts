import express from "express"
import ffmpeg from 'fluent-ffmpeg'

const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!!!");
});

app.post("/process-video", (req, res) => {
  const inputFilePath = req.body.inputFilePath;
  const outputFilePath = req.body.outputFilePath;

  if (!inputFilePath || !outputFilePath) {
    res.status(400).send("Input and output file paths are required");
    return;
  }

  ffmpeg(inputFilePath)
    .outputOptions("-vf", "scale=-1:360") // 360p 
    .on("start", (commandLine) => {
      console.log('FFmpeg started:', commandLine);
    })
    .on("progress", (progress) => {
      console.log('Processing: ' + progress.percent + '% done');
    })
    .on("end", () => {
      res.status(200).send("Video processed succesffully")
    })
    .on("error", (err: { message: string; }) => {
      console.log("An error occurred: " + err.message);
      res.status(500).send("An error occurred while processing the video");
    })
    .save(outputFilePath);
});


app.listen(port, () => {
  console.log(
    `Video processing service listening at http://localhost:${port}!!`);
});
