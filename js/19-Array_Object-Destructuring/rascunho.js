let salaries = {
	"John": 100,
	"Pete": 300,
	"Mary": 250
};

// function topSalary(salaries) {

// 	let salarioMax = 0;
// 	let nomeMax = null;

// 	for (const [name, salary] of salaries) {

// 		if (salary > salarioMax) {
// 			nomeMax = name;
// 			salarioMax = salary;
// 		}
// 	}
// 	return nomeMax;
// }

const topSalary = (salaries) => {

	let salarioMax = 0;
	let nomeMax = null;

	for (const [name, salary] of Object.entries(salaries)) {

		if (salary > salarioMax) {
			nomeMax = name;
			salarioMax = salary;
		}
	}
	return nomeMax;
}

console.log(topSalary(salaries));
