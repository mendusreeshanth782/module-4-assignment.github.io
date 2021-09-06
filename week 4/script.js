var names =new Array();
names[0]="james";
names[1]="yaakov";
names[2]="John";
names[3]="rohit";
names[4]="sreeshanth";
names[5]="janson";
names[6]="joe";
names[7]="Jen";
names[8]="harry";
names[9]="marry";

for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J' || names[i].charAt(0)==='j' )
		console.log("Goodbye J" + names[i]);
	else
		console.log("Hello " + names[i]);
}