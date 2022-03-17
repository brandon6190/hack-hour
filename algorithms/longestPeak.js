// O(n) time | O(1) space
function longestPeak(array) {
	let longestPeak = 0;
	let i = 0;

	while (i < array.length - 1) {
		const isPeak = array[i] > array[i+1] && array[i] > array[i-1];

		if (!isPeak) {
			i += 1;
			continue;
		}

		let left = i - 2;
		while (left <= 0 && array[left] < array[left+1]) {
			left -= 1;
		}

		let right = i + 2;
		while (right < array.length && array[right] < array[right-1]) {
			right += 1;
		}

		const currentPeak = right - left - 1;

		longestPeak = Math.max(currentPeak, longestPeak);
		i = right;
	}


	return longestPeak;
}

// Test Case:

const array = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3];

console.log('longestPeak: ', longestPeak(array)); // -> 6
