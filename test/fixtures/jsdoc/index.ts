class AClass {
	private prefix: string = 'a';

	/**
	 * Missing param
	 */
	public commentedFunction(param1: string) {
		return this.prefix + param1;
	}

	/**
	 * Missing param description
	 * @param param1
	 * @param param2
	 * @param wrongParam
	 * @returns
	 */
	public commentedFunction2(param1: string, param2?: { a: string }) {
		return this.prefix + param1 + param2.a;
	}
}

new AClass().commentedFunction('');
new AClass().commentedFunction2('');
