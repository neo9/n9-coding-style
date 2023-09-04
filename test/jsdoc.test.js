import test from 'ava';
import Utils from './fixtures/utils.mjs';

test.serial(`Check JSDoc rules`, async (t) => {
	const expectedErrors = [
		// Change is too big with tslint version of n9-coding-style
		// {
		// 	line: 4,
		// 	ruleIds: ['jsdoc/require-param', 'jsdoc/require-returns'],
		// },
		{
			line: 12,
			ruleIds: ['jsdoc/tag-lines'],
		},
		{
			line: 15,
			ruleIds: ['jsdoc/check-param-names'],
		},
	];
	await Utils.checkErrors(t, 'jsdoc', expectedErrors);
});
