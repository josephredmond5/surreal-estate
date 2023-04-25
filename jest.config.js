module.exports = {
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest",
  },
  transformIgnorePatterns: [
    "/node_modules/(?!(@babel/runtime-corejs3|other-es-module)/)"
  ],
  moduleNameMapper: {},
  moduleFileExtensions: ["js", "jsx", "json"],
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  globals: {
    NODE_ENV: "test"
  }
};
