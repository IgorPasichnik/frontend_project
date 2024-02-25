import fsp from "node:fs/promises";
import path from "path";

async function readDirectoryInfo(directoryPath) {
  try {
    const files = await fsp.readdir(directoryPath);

    let result = "";

    for (const file of files) {
      const filePath = path.join(directoryPath, file);
      const stats = await fsp.stat(filePath);

      result += `${file} | ${stats.size} | ${stats.birthtime}\n`;
    }

    return result;
  } catch (e) {
    console.error(e);
    return "";
  }
}

readDirectoryInfo(path.resolve(process.cwd(), "path"))
  .then((result) => console.log(result))
  .catch((e) => console.error(e));
