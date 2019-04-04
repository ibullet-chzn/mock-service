import lodash, { defaultsDeep } from "lodash";
import getMockConfig from "../utils/mockConfig";

const { port } = getMockConfig();

const cfgs = [{ port }];

const config = defaultsDeep.apply(lodash, cfgs);

export default config;
