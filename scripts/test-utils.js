import { cn } from '../src/lib/utils.js';
import assert from 'assert';

console.log('Testing cn utility...');

// Test 1: Merges classes
console.log('Test 1: Merge classes');
const result1 = cn('bg-red-500', 'text-white');
assert.strictEqual(result1, 'bg-red-500 text-white');
console.log('PASS');

// Test 2: Handles conditionals
console.log('Test 2: Handle conditionals');
const result2 = cn('bg-red-500', false && 'text-white', 'p-4');
assert.strictEqual(result2, 'bg-red-500 p-4');
console.log('PASS');

// Test 3: Overrides tailwind classes (last wins)
console.log('Test 3: Tailwind overrides');
const result3 = cn('p-4', 'p-8');
assert.strictEqual(result3, 'p-8');
console.log('PASS');

console.log('All tests passed!');
