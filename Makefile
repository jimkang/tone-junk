include config.mk

HOMEDIR = $(shell pwd)
rollup = ./node_modules/.bin/rollup
sirv = ./node_modules/.bin/sirv
TSC = node_modules/typescript/bin/tsc

pushall: sync
	git push origin main

build:
	$(rollup) -c

run:
	$(rollup) -c -w

transport-vat:
	APP=transport make run
