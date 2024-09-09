# Overview

JSON Schema implementation of [ICEG Person](https://github.com/belgif/ICEGthema-person).

# Dependencies

`node` and `npm`.

# Use

After cloning the repo, run :
```bash
npm install

npm start
```

The generated schemas are under `output/schemas/`.

In order to output a particular schema definition, add the following statement to `main.ts` and rerun `npm start`:
```javascript
console.log(JSON.stringify(/*type definition to output*/, null, 2));
```