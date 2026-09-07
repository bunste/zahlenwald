/*
A task is a list of renderable parts plus the expected answer:

  {
    parts: [
      { type: 'number',   value: 7 },
      { type: 'operator', value: '+' },
      { type: 'input' },              // where the user types the answer
      { type: 'equals' },
      { type: 'text', value: 'Punkte' }
    ],
    answer: 12
  }

This shape also covers a missing operand (7 + ? = 12), more than two operands
and word problems, without a lesson having to render anything itself.
*/

export function number(value) {
  return { type: 'number', value };
}

export function operator(value) {
  return { type: 'operator', value };
}

export function equals() {
  return { type: 'equals' };
}

export function text(value) {
  return { type: 'text', value };
}

export function input() {
  return { type: 'input' };
}

// Shorthand for the common "a OP b = ?" task.
export function binaryTask(a, op, b, answer) {
  return {
    parts: [number(a), operator(op), number(b), equals(), input()],
    answer
  };
}
