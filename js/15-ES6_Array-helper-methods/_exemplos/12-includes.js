const meuArray = [
	10,
	"abc",
	true,
	undefined,
	null,
	[1, 2],
	{}
];

console.log(true, meuArray.includes(true));
console.log(10, meuArray.includes(10));
console.log("abc", meuArray.includes("abc"));

console.log("abc", meuArray.includes("abc", 2)); // false

console.log("[1, 2]", meuArray.includes([1, 2])); // false

console.log("{}", meuArray.includes({})); // false
