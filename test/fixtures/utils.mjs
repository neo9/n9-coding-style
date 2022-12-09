import { ESLint } from 'eslint';
import path from 'path';

import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default class Utils {
	static async checkErrors(t, folder, expectedErrors, fileToTest = 'index.ts') {
		const allRuleIds = [];
		for (const expectedError of expectedErrors) {
			allRuleIds.push(...expectedError.ruleIds);
		}
		console.log(`Check starting, expecting ${allRuleIds.length} errors to occur ...`);
		const esLint = new ESLint({
			cwd: path.join(__dirname, folder),
			overrideConfigFile: path.join(__dirname, '.eslintrc.yaml'),
		});

		console.log(`Running es-lint...`);
		const result = await esLint.lintFiles(path.join(__dirname, folder, fileToTest));
		console.log(`Eslint end.`);

		const errors = result[0].messages;
		const fullFileName = path.join(folder, fileToTest);

		try {
			for (const error of errors) {
				const foundError = expectedErrors.find(
					(expectedError) =>
						expectedError.line === error.line && expectedError.ruleIds.includes(error.ruleId),
				);
				this.testTruthy(
					t,
					foundError,
					`Error ${error.ruleId} line ${error.line} in file ${fullFileName}:${error.line} found`,
				);
			}
			for (const expectedError of expectedErrors) {
				for (const ruleId of expectedError.ruleIds) {
					const foundError = errors.find(
						(e) => e.ruleId === ruleId && e.line === expectedError.line,
					);
					this.testTruthy(
						t,
						foundError,
						`Error ${ruleId} line ${expectedError.line} in file ${fullFileName}:${expectedError.line} found`,
					);
				}
			}
			// console.log(
			// 	`-- utils.mjs errors.length, allRuleIds.length --`,
			// 	errors.length,
			// 	allRuleIds.length,
			// );
			this.testIs(t, errors.length, allRuleIds.length, 'Count of errors is OK');
		} catch (e) {
			console.log(`Error while running test :`, e);
			for (const error of errors) {
				let ruleIdToPrint = `"${error.ruleId}"`.padEnd(40);
				console.log(
					`Linting errors that occurred for ${fullFileName} : ${ruleIdToPrint} line : ${error.line
						.toString()
						.padStart(2)} `,
					error.message,
				);
			}

			console.log(`Found ${errors.length} error, expecting ${allRuleIds.length}`);
			throw e;
		}
	}

	static testTruthy(t, value, message) {
		if (!t.truthy(value, message)) {
			throw new Error(`assertion-fail : ${message}`);
		}
	}

	static testIs(t, value1, value2, message) {
		if (!t.is(value1, value2, message)) {
			throw new Error(`assertion-fail : ${message}`);
		}
	}
}
