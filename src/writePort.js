import fsp from "node:fs/promises";
import path from "node:path";
import url from "node:url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const port = process.env.PORT || 9500;

const writeFile = async () => {
  const filepath = path.resolve(__dirname, "../dist/port.txt");
  try {
    await fsp.access(filepath);
    console.log("Файл существует");
  } catch {
    await fsp.writeFile(
      filepath,
      `enviroment variable PORT = ${port}`,
      "utf-8"
    );
    console.log("Файл успешно записан");
  }
};

writeFile();
