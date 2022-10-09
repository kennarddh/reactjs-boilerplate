// eslint-disable-next-line no-undef
module.exports = {
	testEnvironment: 'jsdom',
	coveragePathIgnorePatterns: ['/node_modules/'],
	collectCoverageFrom: ['./src/**'],
	coverageThreshold: {
		global: {
			branches: 80,
			functions: 80,
			lines: 80,
			statements: 80,
		},
	},
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
	clearMocks: true,
}
