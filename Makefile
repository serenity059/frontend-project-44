lint:
	npx eslint .

install:
	nmp ci

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run
