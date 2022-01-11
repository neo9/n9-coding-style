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
	private static aField: string = '';
	public static ANOTHER_FIELD: string = '';

	public static A_FUNCTION_STATIC_NAME(): string {
		return this.aField + this.ANOTHER_FIELD;
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

new AClassName().anInstanceFunctionName('1', '2');
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

class AClass2 {
	constructor(private prop: string) {}

	setProp(param: { a: string }) {
		param.a = '45';
		this.prop = param.a;
	}
}

new AClass2('s').setProp({ a: '22' });
