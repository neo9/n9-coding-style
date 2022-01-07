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
	 * @param wrongParam
	 * @returns
	 */
	public commentedFunction2(param1: string) {
		return this.prefix + param1;
	}
}

new AClass().commentedFunction('');
new AClass().commentedFunction2('');
