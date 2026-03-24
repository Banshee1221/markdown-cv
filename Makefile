HOST_PORT ?= 4000

.DEFAULT_GOAL := help

.PHONY: help install build test serve clean

help:
	@printf '%s\n' \
		'Available targets:' \
		'  make install Install local dependencies' \
		'  make build   Build the Astro site' \
		'  make test    Alias for build' \
		'  make serve   Start the Astro dev server at http://localhost:4000/' \
		'  make clean   Remove generated site artifacts'

install:
	@if [ ! -d node_modules ]; then npm ci; else npm install; fi

build:
	@if [ ! -d node_modules ]; then npm ci; fi
	npm run build

test: build

serve:
	@if [ ! -d node_modules ]; then npm ci; fi
	npm run dev -- --host 0.0.0.0 --port $(HOST_PORT)

clean:
	rm -rf dist .astro
