import test from 'ava';
import Utils from './fixtures/utils.mjs';

test.serial(`Cognitive complexity should be active and set to 10`, async (t) => {
	const expectedErrors = [
		{
			line: 33,
			ruleIds: ['sonarjs/cognitive-complexity'],
		},
	];
	await Utils.checkErrors(t, 'sonarjs', expectedErrors, 'cognitive-complexity.ts');
});
