import test from 'ava';
import Utils from './fixtures/utils.mjs';

test.serial(`Check JSDoc rules`, async (t) => {
	const expectedErrors = [
		{
			line: 4,
			ruleIds: ['jsdoc/require-param', 'jsdoc/require-returns'],
		},
		{
			line: 12,
			ruleIds: ['jsdoc/newline-after-description'],
		},
		{
			line: 14,
			ruleIds: ['jsdoc/check-param-names'],
		},
	];
	await Utils.checkErrors(t, 'jsdoc', expectedErrors);
});
