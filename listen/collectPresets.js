var fs = new require("fs");

//iterate through the effect and instrument directory and collect the names of all the classes and presets
var presets = {
	"effect" : {},
	"instrument" : {}
};

//effects
var effectClasses = fs.readdirSync("../effect");

for (var i = 0; i < effectClasses.length; i++){
	var className = effectClasses[i];
	if (className[0] !== "."){
		presets.effect[className] = fs.readdirSync("../effect/"+className);
	}
}

//instruments
var instrumentClasses = fs.readdirSync("../instrument");

for (var i = 0; i < instrumentClasses.length; i++){
	var className = instrumentClasses[i];
	if (className[0] !== "."){
		presets.instrument[className] = fs.readdirSync("../instrument/"+className);
	}
}

fs.writeFileSync("./scripts/PresetList.js", "var PresetList = " + JSON.stringify(presets, undefined, "\t"));