const conPlugin = [];
if (process.env.NODE_ENV === "production") {
  conPlugin.push("transform-remove-console");
}
module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    ...conPlugin
  ]
};
