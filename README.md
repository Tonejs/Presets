## Reason

This repo is meant to be a resources for presets and musical inspiration. Contributions are encouraged!

## Contributing

Contributions are very welcome. Once your pull request is merged, your presets will be browse-able and download-able through the [preset CDN](http://preset.tonejs.org). 

### Contribution Guidelines

#### Folder

Presets are organized first by instrument/effect and then by the class name. 

#### Naming

Give your preset an original name. You're the author and this could be whatever you want (within reason). Names shouldn't contain any special characters.  

#### JSON

Presets need to be valid JSON and the file must end in `.json`. Run your preset through a [JSON linter](http://jsonlint.com/) to make sure there are no errors. Also make sure that your preset works on the latest version of Tone.js and that it sounds how you want it to. 

## Using Presets

You can test out presets [here](http://tonejs.github.io/Presets/preview/). Once you've fine-tuned your preset, use it in the constructor of your object or with the `set` method.

For example, here is a Distortion preset:

```javascript
var dist = new Tone.Distortion({
	"distortion" : 0.08
});
```

Simple as that!