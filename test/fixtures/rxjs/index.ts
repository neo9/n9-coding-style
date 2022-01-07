import { interval } from 'rxjs';

const subscription = [];

subscription.push(
	interval(1_000).subscribe((value: number) => {
		// rxjs/no-ignored-subscription doesn't work on this one
		return value;
	}),
);

await interval(1_000);
await interval(1_000).subscribe(async (value: number): Promise<number> => {
	return await Promise.resolve<number>(value);
});
