import test from 'ava';
import Utils from './fixtures/utils.mjs';

test.serial(`load config index.ts in ESLint to validate all rules are correct`, async (t) => {
	t.timeout(120 * 1_000, 'Timeout at 120s');

	const expectedErrors = [
		{
			line: 1,
			ruleIds: [
				'@typescript-eslint/no-inferrable-types', // Type string trivially inferred from a string literal, remove type annotation.
				'prefer-const', // 'constant' is never reassigned. Use 'const' instead.
			],
		},
		{
			line: 2,
			ruleIds: [
				'no-console', // Unexpected console statement.
			],
		},
		{
			line: 4,
			ruleIds: [
				'no-new', // Do not use 'new' for side effects.
				'@typescript-eslint/no-empty-function', // Unexpected empty arrow function.
				'@typescript-eslint/no-floating-promises', // Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator.
			],
		},
		{
			line: 6,
			ruleIds: [
				'@typescript-eslint/no-empty-function', // Unexpected empty arrow function.
			],
		},
		{
			line: 10,
			ruleIds: [
				'@typescript-eslint/no-unused-vars', // 'constant' is assigned a value but never used.
				'no-unused-vars', // 'constant' is assigned a value but never used.
			],
		},
		{
			line: 12,
			ruleIds: [
				'@typescript-eslint/typedef', // Expected a to have a type annotation.
			],
		},
		{
			line: 14,
			ruleIds: [
				'prefer-template', // Unexpected string concatenation
				'@typescript-eslint/restrict-plus-operands', // Operands of '+' operation must either be both strings or both numbers.
			],
		},
		{
			line: 17,
			ruleIds: [
				'@typescript-eslint/no-unused-vars', // 'constant' is assigned a value but never used.
				'no-unused-vars', // 'constant' is assigned a value but never used.
			],
		},
		{
			line: 23,
			ruleIds: [
				'@typescript-eslint/no-floating-promises', // Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator.
			],
		},
		{
			line: 28,
			ruleIds: [
				'@typescript-eslint/no-misused-promises', // Expected non-Promise value in a boolean conditional.
			],
		},
		{
			line: 32,
			ruleIds: [
				'@typescript-eslint/no-unused-vars', // 'constant' is assigned a value but never used.
				'no-unused-vars', // 'constant' is assigned a value but never used.
				'@typescript-eslint/array-type', // Array type using 'Array<string>' is forbidden. Use 'string[]' instead.
			],
		},
		{
			line: 34,
			ruleIds: [
				'@typescript-eslint/typedef', // Expected a to have a type annotation.
			],
		},
		{
			line: 46,
			ruleIds: [
				'object-shorthand', // Expected property shorthand.
			],
		},
		{
			line: 52,
			ruleIds: [
				'@typescript-eslint/naming-convention', // Class name `A_Wrong_class_name` must match one of the following formats: PascalCase
			],
		},
		{
			line: 54,
			ruleIds: [
				'@typescript-eslint/naming-convention', // Class Property name `aField` must match one of the following formats: UPPER_CASE
			],
		},
		{
			line: 55,
			ruleIds: [
				'@typescript-eslint/naming-convention', // Class Property name `a_Field` must match one of the following formats: camelCase
			],
		},
		{
			line: 56,
			ruleIds: [
				'@typescript-eslint/member-ordering', // Member anotherField should be declared before all instance field definitions.
				'@typescript-eslint/naming-convention', // Class Property name `anotherField` must match one of the following formats: UPPER_CASE
			],
		},
		{
			line: 57,
			ruleIds: [
				'@typescript-eslint/typedef', // Expected another_Field to have a type annotation
				'@typescript-eslint/naming-convention', // Class Property name `another_Field` must match one of the following formats: camelCase
			],
		},
		{
			line: 59,
			ruleIds: [
				'@typescript-eslint/member-ordering', // Member anotherField should be declared before all instance field definitions.
				'@typescript-eslint/naming-convention', // Class Method name `aWrongFunctionStaticName` must match one of the following formats: UPPER_CASE
			],
		},
		{
			line: 64,
			ruleIds: [
				'@typescript-eslint/naming-convention', // Class Method name `a_Wrong_instance_Function_Name` must match one of the following formats: camelCase
			],
		},
		{
			line: 73,
			ruleIds: [
				'no-debugger', // Unexpected 'debugger' statement.
				'spaced-comment', // Expected exception block, space or tab after '//' in comment.
			],
		},
		{
			line: 75,
			ruleIds: [
				'no-console', //'Unexpected console statement.
			],
		},
		{
			line: 76,
			ruleIds: [
				'no-console', //'Unexpected console statement.
			],
		},
		{
			line: 77,
			ruleIds: [
				'no-console', //'Unexpected console statement.
			],
		},
		{
			line: 78,
			ruleIds: [
				'no-console', //'Unexpected console statement.
			],
		},
		{
			line: 80,
			ruleIds: [
				'no-restricted-syntax', // for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.
				'guard-for-in', // The body of a for-in should be wrapped in an if statement to filter unwanted properties from the prototype
			],
		},
		{
			line: 89,
			ruleIds: [
				'no-extra-label', // This label 'LABEL' is unnecessary.
			],
		},
		{
			line: 93,
			ruleIds: [
				'no-bitwise', // Unexpected use of '&'.
			],
		},
		{
			line: 96,
			ruleIds: [
				'no-eq-null', // Use '===' to compare with null.
			],
		},
		{
			line: 102,
			ruleIds: [
				'@typescript-eslint/no-unused-expressions', // Expected an assignment or function call and instead saw an expression.
				'no-caller', // Avoid arguments.caller.
				// no-unsafe-member-access disabled, too restrictif
				// '@typescript-eslint/no-unsafe-member-access', // Unsafe member access .caller on an `any` value.
				'no-undef', // 'arguments' is not defined.
			],
		},
		{
			line: 106,
			ruleIds: [
				'no-constant-condition', // Unexpected constant condition.
				'no-cond-assign', // Unexpected assignment within an 'if' statement.
			],
		},
		{
			line: 107,
			ruleIds: [
				'no-new-wrappers', // Do not use String as a constructor.
			],
		},
		{
			line: 110,
			ruleIds: [
				'@typescript-eslint/no-empty-interface', // An empty interface is equivalent to `{}`
			],
		},
		{
			line: 117,
			ruleIds: [
				'constructor-super', // Unexpected duplicate 'super()'.
			],
		},
		{
			line: 123,
			ruleIds: [
				'no-eval', // eval can be harmful
			],
		},
		{
			line: 125,
			ruleIds: [
				'@typescript-eslint/no-unused-vars', // 'constant' is assigned a value but never used.
				'no-unused-vars', // 'constant' is assigned a value but never used.
			],
		},
		{
			line: 127,
			ruleIds: [
				'@typescript-eslint/no-shadow', // 'shadowVariable' is already declared in the upper scope on line 125 column 7.
			],
		},
		{
			line: 133,
			ruleIds: [
				// no-unsafe-member-access disabled, too restrictif
				// '@typescript-eslint/no-unsafe-member-access', // Unsafe member access ['something'] on an `any` value.
				'dot-notation', // ["something"] is better written in dot notation
			],
		},
		{
			line: 136,
			ruleIds: [
				'no-throw-literal', // Expected an error object to be thrown
				'rxjs/throw-error', // Passing non-Error values are forbidden
			],
		},
		{
			line: 140,
			ruleIds: [
				'default-case', // Expected a default case.
			],
		},
		{
			line: 152,
			ruleIds: [
				'@typescript-eslint/no-redeclare', // 'InterfaceRedeclared' is already defined
			],
		},
		{
			line: 161,
			ruleIds: [
				'one-var', // Split 'const' declarations into multiple statements
			],
		},
		{
			line: 166,
			ruleIds: [
				'no-plusplus', // Unary operator '++' used.
			],
		},
		{
			line: 171,
			ruleIds: [
				'radix', // Missing radix parameter
			],
		},
		{
			line: 173,
			ruleIds: [
				'eqeqeq', // Expected '!==' and instead saw '!='.
			],
		},
		{
			line: 178,
			ruleIds: [
				'use-isnan', // Use the isNaN function to compare with NaN
			],
		},
		{
			line: 182,
			ruleIds: [
				'@typescript-eslint/ban-types', // Don't use `String` as a type. Use string instead
			],
		},
		{
			line: 184,
			ruleIds: [
				'@typescript-eslint/ban-types', // Don't use `{}` as a type. `{}` actually means "any non-nullish value".
			],
		},
		{
			line: 188,
			ruleIds: [
				'@typescript-eslint/prefer-function-type', // Don't use `{}` as a type. `{}` actually means "any non-nullish value"
			],
		},
		{
			line: 195,
			ruleIds: [
				'@typescript-eslint/consistent-type-assertions', // Use 'as string' instead of '<string>'
			],
		},
		{
			line: 198,
			ruleIds: [
				'@typescript-eslint/no-invalid-this', //  Unexpected 'this'
			],
		},
		{
			line: 200,
			ruleIds: [
				'no-undef-init', // Disallow Initializing to undefined
			],
		},
		{
			line: 208,
			ruleIds: [
				'no-unsafe-finally', // Unsafe usage of ReturnStatement
			],
		},
		{
			line: 212,
			ruleIds: [
				'no-lone-blocks', // Block is redundant
			],
		},
		{
			line: 213,
			ruleIds: [
				'no-use-before-define', // 'k' was used before it was defined
			],
		},
		{
			line: 214,
			ruleIds: [
				'vars-on-top', //  All 'var' declarations must be at the top of the function scope.
				'no-var', //  Unexpected var, use let or const instead.
			],
		},
		{
			line: 217,
			ruleIds: [
				'prefer-arrow-callback', //  Unexpected function expression
			],
		},
		{
			line: 230,
			ruleIds: [
				'no-param-reassign', //   Assignment to function parameter 'p'
			],
		},
		{
			line: 236,
			ruleIds: [
				'@typescript-eslint/no-unnecessary-boolean-literal-compare', //   This expression unnecessarily compares a boolean value to a boolean instead of using it directly
			],
		},
		{
			line: 242,
			ruleIds: [
				'curly', //  Expected { after 'if' condition
			],
		},
		{
			line: 245,
			ruleIds: [
				'yoda', //  Yoda conditions are so named because the literal value of the condition comes first while the variable comes second
			],
		},
		{
			line: 248,
			ruleIds: [
				'no-else-return', //  Unnecessary 'else' after 'return'
			],
		},
	];

	await Utils.checkErrors(t, 'general-errors', expectedErrors);
});
