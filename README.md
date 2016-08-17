# jsort [![Build Status](https://travis-ci.org/fknussel/jsort.svg)](https://travis-ci.org/fknussel/jsort)

Simple array sorting utility supporting multiple data types.

## Install

```
npm install --save jsort
```

## Usage

### jsort.`<dataType>(array [, key])`

Available data types include: `text`, `numeric`, `currency` and `date`. Default sorting order is `ASC`.

```js
jsort.text(['Argentina', 'Australia', 'New Zealand', 'Ireland', 'Canada']);
jsort.numeric([2.01, 1.3555, 3, 1990]);
jsort.currency(['$1,726', '$3,021,726.00', '$120.75']);
jsort.date(['2015-01-31', '01/30/2015', 'Sat, Jan 3, 2015', 'January 31, 2014']);
```

When a key gets passed in, jsort assumes the collection contains objects and will try to sort them by the key provided:

```js
jsort.numeric([{name: 'Homer', age: 40}, {name: 'Marge', age: 35}], 'age');
```

### jsort.`<dataType>(array [, key]).reverse()`

Reverse sort any array (`DESC`) by using the `.reverse()` method:

```js
jsort.text(['I', 'am', 'Yoda']).reverse(); // returns ['Yoda', 'I', 'am']
```

## Run Test Suite

```
npm test
```

## Release Versions

1. `git fetch`
2. `git checkout develop && git reset --hard origin/develop`
3. `npm version [<newversion> | major | minor | patch]`
4. `git checkout master && git reset --hard origin/master`
5. `git merge develop`
6. `git push --tags && git push && git checkout develop && git push`

Publish the package to [npm's public registry](https://www.npmjs.com/):

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
