// import type { Config } from "jest";
// import nextJest from "next/jest";

// const createJestConfig = nextJest({
//   dir: "./",
// });

// const config: Config = {
//   testEnvironment: "jest-environment-jsdom",
//   setupFilesAfterFramework: ["<rootDir>/jest.setup.ts"],
//   moduleNameMapper: {
//     "^@/(.*)$": "<rootDir>/$1",
//   },
// };

// export default createJestConfig(config);

const nextJest = require("next/jest.js");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
};

module.exports = createJestConfig(customJestConfig);
