const Parent = {
	type: "Parent",
	typeInfo() {
		console.log(`Olá de ${this.type}`);
	},
	modifyType(newType) {
		this.type = newType;
	}
};

console.log(Parent.type); // "Parent"
Parent.typeInfo(); // "Olá de Parent"

console.log(Parent.prototype); // undefined

const child = Object.create(Parent);

console.log(child.__proto__ === Parent); // true (Não Parent.prototype)

child.modifyType("Tipo modificado");
child.typeInfo();
