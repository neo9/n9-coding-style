const condition = true;

function complexity1(): number {
	if (condition) {
		// +1
		return 0;
	}
	return 1;
}

function complexity10(): number {
	if (condition) {
		// +1
		if (condition) {
			// +2
			if (condition) {
				// +3
				return 1;
			}
			if (condition) {
				// +3
				return 2;
			}
			return 0;
		}
	}
	if (condition) {
		return 1;
	}
	return 0;
}

function complexity11(): number {
	if (condition) {
		// +1
		if (condition) {
			// +2
			if (condition) {
				// +3
				return 1;
			}
			if (condition) {
				// +3
				return 2;
			}
			return 0;
		}

		let count = 0;
		for (const i of [1, 2, 3]) {
			// +2
			count += i;
		}
		return count;
	}
	return 0;
}

complexity1();
complexity10();
complexity11();
