# jsort [![Build Status](https://travis-ci.org/fknussel/jsort.svg)](https://travis-ci.org/fknussel/jsort)

Simple array sorting utility supporting multiple data types.

## Install

```
npm install --save jsort
```

Then import it into your project by doing:

```js
// If your project supports ES6
import jsort from 'jsort';

// The good old way
var jsort = require('jsort').default;
```

## Usage

Available data types include:

* strings
* numeric values of any time (integers, floats, etc.)
* currency values (things like `€1.23`, `$1.23`, `£1.23`, `AUD 1.23`, etc.)
* dates in the following formats:
  - `@TODO`

Default sorting order is `ASC`.

### jsort.data(`<array>`).sort()

```js
jsort
  .data(['Australia', 'Argentina', 'New Zealand', 'Ireland', 'Canada'])
  .sort();

// Returns ['Argentina', 'Australia', 'Canada', 'Ireland', 'New Zealand']

jsort
  .data([2.01, 1990, 1.3555, 3])
  .sort();

// Returns [1.3555, 2.01, 3, 1990]

jsort
  .data(['$1,726', '$3,021,726.00', '$120.75'])
  .sort();

// Returns ['$120.75', '$1,726', '$3,021,726.00']

jsort
  .data(['2015-01-31', '01/30/2015', 'Sat, Jan 3, 2015', 'January 31, 2014'])
  .sort();

// Returns ['January 31, 2014', 'Sat, Jan 3, 2015', '01/30/2015', '2015-01-31']
```

### jsort.data(`<array>`).desc().sort()

Reverse sort any array (`DESC`) by chaining the `.desc()` method:

```js
jsort
  .data(['I', 'am', 'Yoda'])
  .desc()
  .sort();

// Returns ['Yoda', 'I', 'am']
```

### jsort.data(`<array>`).limit(`<integer>`).sort()

Limit the amount of elements in the sorted array by chaining the `.limit()` method, passing in the number of elements to keep:

```js
jsort
  .data(['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide', 'Canberra'])
  .limit(2)
  .sort();

// Returns ['Adelaide', 'Brisbane']
```

### jsort.data(`<array>`).by(`<object-key>`).sort()

When a key gets passed in, jsort assumes the collection contains objects and will try to sort them by the key provided:

```js
jsort
  .data([
    {name: 'Homer', age: 40},
    {name: 'Marge', age: 35},
    {name: 'Bart', age: 9}
  ])
  .by('age')
  .sort();

// Returns [{name: 'Bart', age: 9}, {name: 'Marge', age: 35}, {name: 'Homer', age: 40}]
```

## Development Tasks

| Command             | Description                                                         |
|---------------------|---------------------------------------------------------------------|
| `npm install`       | Fetch dependencies                                                  |
| `npm run lint`      | Lint all the files in the `src/` folder                             |
| `npm run transpile` | Transpile all ES6 code in the `src/` folder to ES5 code into `lib/` |
| `npm run build`     | Lint files, run tests and generate transpiled `lib` folder          |
| `npm test`          | Run test suite                                                      |

## Release Versions

Always build the `lib` folder before bumping a new version:

```
npm run build
```

This will lint all the files, run the tests and transpile the ES6 code from `/src` into `/lib`.

After this, you are good to bump a new version and push it to GitHub:

1. `git fetch`
2. `git checkout develop && git reset --hard origin/develop`
3. `npm version [<newversion> | major | minor | patch]`
4. `git checkout master && git reset --hard origin/master`
5. `git merge develop`
6. `git push --tags && git push && git checkout develop && git push`

Finally, publish the package to [npm's public registry](https://www.npmjs.com/):

```
npm publish
```

To make sure everything worked just fine, go to [http://npmjs.com/package/jsort](http://npmjs.com/package/jsort).

**Heads up!** To publish, you must have a user on the npm registry. If you don't have one, create it with `npm adduser`. If you created one on the site, use `npm login` to store the credentials on the client. You can use `npm config ls` to ensure that the credentials are stored on your client. Check that it has been added to the registry by going to [http://npmjs.com/~](http://npmjs.com/~).

## Semantic Versioning

Given a version number `MAJOR.MINOR.PATCH`, increment the:

1. `MAJOR` version when you make incompatible API changes,
2. `MINOR` version when you add functionality in a backwards-compatible manner, and
3. `PATCH` version when you make backwards-compatible bug fixes.

Additional labels for pre-release and build metadata [are available](https://docs.npmjs.com/cli/version) as extensions to the `MAJOR.MINOR.PATCH` format.

See the [Semantic Versioning](http://semver.org/) specification for more information.
