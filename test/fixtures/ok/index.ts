function getMessage(suffix: string): string {
	return `Hello, World${suffix}`;
}
const suffix: any = '!';
getMessage(suffix);

export type A = {
	a: string;
	b: number;
};

class AClassName {
	private static A_FIELD: string = '';
	public static ANOTHER_FIELD: string = '';

	public static A_FUNCTION_STATIC_NAME(): string {
		return this.A_FIELD + this.ANOTHER_FIELD;
	}

	private aField: string = '';
	public anotherField: string = '';

	/**
	 * A description
	 *
	 * @param param1
	 * @param param2
	 * @returns Concatenation
	 */
	public anInstanceFunctionName(param1: string, param2: string): string {
		return this.aField + this.anotherField + param2;
	}
}

new AClassName().anInstanceFunctionName();
AClassName.A_FUNCTION_STATIC_NAME();

mainLoop: for (const value of Object.keys({})) {
	for (let i = 0; i < 10; i += 1) {
		if (i > 5) {
			getMessage(value);
			continue mainLoop;
		}
	}
}

function fctWithCallBack(fct: () => number) {
	return fct();
}

fctWithCallBack(() => 1);
