Sound design presets and starting points for Tone.js. 

## Reason

Instruments and effects in Tone.js have numerous parameters and values so finding the exact sound you have in mind can be a nuanced and time-intensive undertaking. This repo is meant to be a resources for presets and musical inspiration. Contributions are encouraged!

## Contributing

Contributions are very welcome. Once your pull request is merged, your presets will be browse-able and download-able through the [preset CDN](http://preset.tonejs.org). 

### Contribution Guidelines

#### Naming

Give your preset an original name. You're the author and this could be whatever you want (within reason). Names shouldn't contain any special characters.  

#### JSON

Presets need to be valid JSON and the file must end in `.json`. Run your preset through a [JSON linter](http://jsonlint.com/) to make sure there are no errors. Also make sure that your preset works on the latest version of Tone.js and that it sounds how you want it to. 

#### Parameters

Make sure you fill in **ALL** available parameters. You can get the full list of parameters by checking out the `defaults` for your class in the documentation. 

#### meta

Add a `meta` attribute to your json which includes your name (if you want) as well as a comma separated array of "tags". This will help make the presets more searchable.

## Using Presets

You can listen to all of the presets [here](). Once you pick your preset, you can pass in the JSON into the contructor of the class. 

For example, here is the an AutoFilter preset:

```
var filter = new Tone.AutoFilter({
	"baseFrequency" : 250,
	"octaves" : 5,
	"sensitivity" : 0,
	"Q" : 2,
	"gain" : 20,
	"rolloff" : -24,
	"follower" : {
		"attack" : 0.1,
		"release" : 0.2
	}
});
```