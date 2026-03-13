const defaultConfig = { theme: "light", font: "small" };
const userConfig = { theme: "dark" };

const finalConfig = { ...defaultConfig, ...userConfig };
console.log(finalConfig);
