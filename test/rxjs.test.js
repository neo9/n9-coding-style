import test from 'ava';
import Utils from './fixtures/utils.mjs';

test.serial(`Check rxjs rules`, async (t) => {
	const expectedErrors = [
		{
			line: 12,
			ruleIds: [
				'@typescript-eslint/await-thenable', // Unexpected `await` of a non-Promise (non-"Thenable") value.
			],
		},
		{
			line: 13,
			ruleIds: [
				'@typescript-eslint/await-thenable', // Unexpected `await` of a non-Promise (non-"Thenable") value.
				'rxjs/no-async-subscribe', // Passing async functions to subscribe is forbidden.
			],
		},
	];
	await Utils.checkErrors(t, 'rxjs', expectedErrors);
});
