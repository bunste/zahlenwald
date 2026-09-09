# zahlenwald

https://bunste.github.io/zahlenwald/

## Start local web server

```
./serve.sh
```

Afterwards visit http://localhost:8000

## Release information

The version and release date shown in the start-page footer are maintained manually in `index.html`. Update the `site-footer` entry there whenever a new release is published.

## Project notes

The site requires serve.sh for local development, and multiple choice is prepared for but not implemented - the parts list and the check override are the seam for it.

A lesson is a self-describing value. It owns its own metadata and its own task shape, and may override render or check - but gets rendering, scoring, confetti and ponies for free.

`task.js` - the task shape: parts (a token list of number/operator/equals/text/input) + answer, plus a binaryTask() shorthand. 7 + ? = 12 and 3-operand tasks are expressible today.

`lessons.js` - a Map allow-list of lesson id → dynamic import. The `?lesson=` param is looked up, never concatenated into a path.

`index-page.js` - builds the lesson cards from the registry, so titles/descriptions live in one place.
