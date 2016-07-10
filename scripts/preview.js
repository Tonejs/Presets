$(function(){

	var topbar = $("#Topbar");

	//add the logo
	Logo({
		"container" : topbar.get(0),
		"height" : topbar.height() - 6,
		"width" : 140
	});

	$("#Presets").on("keypress keydown", function(e){
		e.stopPropagation();
	});
	
	var instrument = new Tone.Synth().toMaster();

	/**
	 *  INSTRUMENT
	 */

	makePresetOptions("#Instruments", "instrument", function(className){
		instrument.dispose();
		instrument = new Tone[className]().toMaster();
	}, function(json){
		instrument.dispose();
		//make a new one
		instrument = new Tone[instrument.toString()](json).toMaster();
	});

	/**
	 * 	KEYBOARD 
	 */
	var keyboard = new AudioKeys({
		polyphony: 1,
		rows: 1,
		priority: "last"
	});


	keyboard.down(function (note) {
		console.log(note);
		if (instrument.toString() === "NoiseSynth"){
			instrument.triggerAttack();
		} else {
		    instrument.triggerAttack(note.frequency);
		}
	});

	keyboard.up(function (note) {
	    instrument.triggerRelease();
	});

});

function makePresetOptions(parent, folder, classCallback, presetCallback){

	var editor = new JSONTone(parent + " #JSON");

	var applyButton = $(parent + " button").on("click", function(){
		applyButton.hide();
		presetCallback(editor.get());
	}).hide();

	editor.change(function(){
		applyButton.show();
	});

	var nameSelect = $(parent + " #Names select");
	var presetSelect = $(parent + " #Presets select");

	nameSelect.on("change", function(){
		presetSelect.html("");
		var className = nameSelect.val();
		var options = PresetList[folder][className];
		for (var i = 0; i < options.length; i++){
			var file = options[i];
			var opt = $("<option>")
				.appendTo(presetSelect)
				.prop("value", file)
				.text(file.substring(0, file.length - 5));
		}
		classCallback(className);
		//choose a random option
		var randOpt = options[Math.floor(Math.random() * options.length)];
		presetSelect.val(randOpt);
		presetSelect.change();
	});

	presetSelect.on("change", function(){
		var presetName = nameSelect.val();
		var file = presetSelect.val();
		editor.set({});
		applyButton.hide();
		//load the preset
		$.getJSON("../"+folder+"/" + presetName + "/" + file, function(json){
			editor.set(json);
			applyButton.hide();
			presetCallback(editor.get());
		});
	});

	var alloptions = [];
	for (var inst in PresetList[folder]){
		alloptions.push(inst);
		var opt = $("<option>")
			.appendTo(nameSelect)
			.prop("value", inst)
			.text(inst);
	}
	//pick a random one
	var randomInst = alloptions[Math.floor(Math.random() * alloptions.length)];
	nameSelect.val(randomInst);
	nameSelect.change();
}