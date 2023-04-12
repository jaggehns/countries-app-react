module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./setupTests.ts', './envMock.ts'],
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    '\\.(png|svg|pdf|jpg|jpeg|gif)$': '<rootDir>/fileMock.ts',
    '.+\\.(css|styl|less|sass|scss)$': '<rootDir>/src/test/index.css',
  },
  transform: {
    '^.+\\.(js|jsx|ts)$': 'babel-jest',
    '\\.[jt]sx?$': [
      'ts-jest',
      {
        tsconfig: false,
        useESM: true,
        babelConfig: true,
        plugins: ['babel-plugin-transform-vite-meta-env'],
      },
    ],
  },
};
