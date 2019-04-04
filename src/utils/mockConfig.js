import fs from "fs";
import path from "path";

const getMockConfig = () => {
  try {
    const mockFilePath = path.join(process.cwd(), "_mock.js");
    const mockText = fs.readFileSync(path.resolve(mockFilePath), "utf8");
    return eval(mockText);
  } catch (err) {
    throw err;
  }
};

export default getMockConfig;
