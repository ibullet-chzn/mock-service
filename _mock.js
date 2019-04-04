// 所有配置项 只有 render 修改可以立即生效
// 无法引用其他任何文件

const login = {
  url: "/login",
  type: "GET",
  render: () => {
    return {
      login: true
    };
  }
};

exports.module = {
  port: 9999,
  format: ["status", null, "data"],
  mockArray: [
    {
      url: "/a",
      type: "get",
      render: {
        a: 1
      }
    },
    login
  ]
};
