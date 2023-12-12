let constant: string = 'should be a constant'; // noInferrableType, prefer-const
console.log('Should use a logger !');

new Promise(() => {});

await new Promise(() => {});

class A {}

const a = new A(); // ok with no error

function getMessage(suffix) {
	// parameter type and missing return type
	return 'Hello, World' + suffix + 5; // should use template string
}

const message = getMessage('!'); // message is never used

async function b() {
	// missing types
}

b();

const promise = Promise.resolve('value');

// Always `await` the Promise in a conditional
if (promise) {
	// Do something
}

const array: Array<string> = [];

function getMessage2(suffix): string {
	// parameter type missing
	return `Hello, World${suffix as string}`; // should use template string
}

getMessage2('');

/// <reference types="eslint" />
const otherConstant = '';
const objectSort = {
	b: 1,
	constant, // no rules in eslint to replace the one existing in tslint https://github.com/ajafff/tslint-consistent-codestyle/blob/master/docs/object-shorthand-properties-first.md
	otherConstant: otherConstant, //  Expected property shorthand.
	a: 'can be there',
};

getMessage2(objectSort as string);

class A_Wrong_class_name {
	// naming wrong
	private static A_FIELD: string = '';
	private a_Field: string = '';
	public static anotherField: string = ''; // member ordering & naming wrong
	public another_Field = ''; // typedef & naming wrong

	public static aWrongFunctionStaticName(): string {
		// naming wrong
		return this.A_FIELD + this.anotherField;
	}

	public a_Wrong_instance_Function_Name(): string {
		// naming wrong
		return this.a_Field + this.another_Field;
	}
}

new A_Wrong_class_name().a_Wrong_instance_Function_Name();
A_Wrong_class_name.aWrongFunctionStaticName();

debugger; //no-debugger

console.error('some wrong usage'); // no-console
console.debug('some wrong usage'); // no-console
console.info('some wrong usage'); // no-console
console.warn('some wrong usage'); // no-console

for (const key in {}) {
	// forin error
	getMessage2(key);
}

LABEL: for (const element of ['a', 'b']) {
	// useless label
	getMessage2(element);
	if (element === 'b') {
		break LABEL;
	}
}

const d = 1 & 2; // no bitwise
getMessage2(d.toString());

if (d == null) {
	// no null check without type check
	getMessage2(d.toString());
}

(() => {
	arguments.caller;
})();

const e: { a: number } = {};
if ((e.a = 5)) {
	getMessage(new String(e));
}

interface AnEmptyInterface {}

class AParentClass implements AnEmptyInterface {}

class AClassThatExtendAnother extends AParentClass {
	constructor() {
		super();
		super(); // should be checked
	}
}

AClassThatExtendAnother();

eval('const a = 5;');

const shadowVariable = 'no shadow';
function print(): void {
	const shadowVariable = 'shadow'; // TSLint will complain here.
	getMessage(shadowVariable);
}
print(); // logs 'shadow'.

const anAnyValue: any = {};
getMessage(anAnyValue['something']);

if (e.a > 5) {
	throw 'throwing a string lacks any stack trace information and other important data properties';
}

const foo = 5;
switch (foo) {
	case 1:
		getMessage('');
	/* falls through */
	case 2:
	case 3:
		getMessage('');
}

interface InterfaceRedeclared {
	prop1: 1;
}
interface InterfaceRedeclared {
	prop2: 2;
}
const somethingElse: InterfaceRedeclared = {
	prop1: 1,
	prop2: 2,
};
getMessage(somethingElse.prop2);

const foo2 = 1,
	bar = '2';
getMessage(foo2);
getMessage(bar);

for (let i = 0, j = 10; i < 10; i++) {
	// rule missing to check i and j declaration
	getMessage(j + i);
}

getMessage(Number.parseInt('50'));

if (foo2 != bar) {
	// require ===
	getMessage('');
}

if (parseInt('_4711', 10) === NaN) {
	getMessage('');
}

const str: String = 'foo'; //  Don't use `String` as a type. Use string instead
getMessage(str);
const curly2: {} = { a: 'string' };
getMessage(curly2);

interface Foo extends Function {
	(): void;
}
const f: Foo = () => {
	getMessage2('');
};
f();

const g = <string>'42';
getMessage(g);

getMessage(this.g);

let h = undefined;
h = 5;
getMessage(h);

(() => {
	try {
		throw new Error('Try'); // error is thrown but suspended until finally block ends
	} finally {
		return 3; // 3 is returned before the error is thrown, which we did not expect
	}
})();

{
	getMessage(k);
	var k = 1;
}

getMessage(function fctCallback(l: string) {
	return l;
});

function fctOverload(x: number);
function fctOverload(x: string): void {
	// should throw error unified-signatures : https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/unified-signatures.md
	getMessage(x);
}
fctOverload(1);
fctOverload('1');

function functionParamReassign(p: number): void {
	p = 10;
	getMessage(p);
}
functionParamReassign(5);

const m = true;
if (m === true) {
	getMessage(m);
}

// prettier-ignore
if(m)
  h = 10;

function functionNoElseAfterReturn(): number {
	if (1 < h) {
		// yoda: should be h < 1
		return 1;
	} else {
		return 3;
	}
}
functionNoElseAfterReturn();

getMessage((l: string) => {
	// return type not required
	return l;
});

const objectNaming: any = {
	'MySecondProperty': null,
	'my-property': 'test',
	'my.property': 'test',
	'myProperty': null,
	'mysecondproperty': null,
};
getMessage(objectNaming);

// TODO: add rxjs example
