import fs from "fs";
import Router from "koa-router";
import getMockConfig from "../utils/mockConfig";
import encapsulationBody from "../models/encapsulation";
import path from "path";

const router = Router();

router.get("/mock-service-dashboard", async ctx => {
  const title = "mock-service-dashboard start";
  await ctx.render("index", { title });
});

let mockObject = getMockConfig().mockObject;

console.log(mockObject);

const initMock = () => {
  Object.keys(mockObject).map(keys => {
    // 转小写
    router[mockObject[keys].type.toLowerCase()](keys, ctx => {
      ctx.body = encapsulationBody(
        "SUCCESS",
        typeof mockObject[keys].render === "function"
          ? mockObject[keys].render()
          : mockObject[keys].render
      );
    });
  });
};

initMock();

fs.watchFile(path.join(process.cwd(), "_mock.js"), () => {
  mockObject = getMockConfig().mockObject;
});

export default router;
