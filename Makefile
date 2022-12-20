#Makefile

install: #install devPackages
	npm ci

brain-games: #start game
	node bin/brain-games.js