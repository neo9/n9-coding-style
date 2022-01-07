import test from 'ava';
import Utils from './fixtures/utils.mjs';

test.serial(`load config index.ts in ESLint to validate all rules are correct`, async (t) => {
	t.timeout(120 * 1_000, 'Timeout at 120s');

	await Utils.checkErrors(t, 'ok', []);
});
