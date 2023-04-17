gendiff:
	node bin/gendiff.js

install:
	npm install

publish:
	npm publish --dry-run

lint:
	npx eslint .

test-coverage:
	npx jest --coverage

test:
	npm test --watch