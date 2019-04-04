import getMockConfig from "../utils/mockConfig";

const { format } = getMockConfig();

const globalCode = name => {
  const Enums = {
    SUCCESS: 0,
    SUCCESS_TEXT: "Success"
  };
  return [Enums[name], Enums[name + "_TEXT"]];
};

const encapsulationBody = (enums, data) => {
  return {
    [format[0] || "code"]: globalCode(enums)[0],
    [format[1] || "message"]: globalCode(enums)[1],
    [format[2] || "data"]: data
  };
};

export default encapsulationBody;
