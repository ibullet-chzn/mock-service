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

const updateMock = () => {
  let mockArray = getMockConfig().mockArray;
  mockArray.map(item => {
    // 转小写
    router[item.type.toLowerCase()](item.url, ctx => {
      ctx.body = encapsulationBody(
        "SUCCESS",
        typeof item.render === "function" ? item.render() : item.render
      );
    });
  });
};

updateMock();

fs.watchFile(path.join(process.cwd(), "_mock.js"), () => {
  updateMock();
});

export default router;
