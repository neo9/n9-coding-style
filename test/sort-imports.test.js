import test from 'ava';
import Utils from './fixtures/utils.mjs';

test.serial(`load config index.ts in ESLint to validate all rules are correct`, async (t) => {
	///	t.timeout(20 * 1_000, 'Timeout at 20s');

	const expectedErrors = [
		{
			line: 1,
			ruleIds: [
				'no-unused-vars',
				'@typescript-eslint/no-unused-vars',
				'simple-import-sort/imports',
			],
		},
		{
			line: 2,
			ruleIds: ['no-unused-vars', '@typescript-eslint/no-unused-vars'],
		},
	];
	await Utils.checkErrors(t, 'sort-imports', expectedErrors);
});
