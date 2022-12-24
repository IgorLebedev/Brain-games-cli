#Makefile

install: #install devPackages
	npm ci

brain-games: #start game
	node bin/brain-games.js

brain-even: #start brain-even
	node bin/brain-even.js

publish: 
	npm publish --dry-run

lint: 
	npx eslint .