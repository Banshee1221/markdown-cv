JEKYLL_IMAGE ?= ghcr.io/actions/jekyll-build-pages@sha256:6791ebfd912185ed59bfb5fb102664fa872496b79f87ff8b9cfba292a7345041
WORKDIR ?= /workspace
HOST_PORT ?= 4000
PREVIEW_DIR ?= /tmp/markdown-cv-site

.DEFAULT_GOAL := help

.PHONY: help build test serve clean

help:
	@printf '%s\n' \
		'Available targets:' \
		'  make build   Build the site in Docker using the pinned GitHub Pages Jekyll image' \
		'  make test    Alias for build' \
		'  make serve   Serve the site in Docker at http://localhost:4000/' \
		'  make clean   Remove generated site artifacts'

build:
	docker run --rm \
		-e GITHUB_WORKSPACE=$(WORKDIR) \
		-e GITHUB_REPOSITORY=local/markdown-cv \
		-e GITHUB_API_URL=https://api.github.com \
		-e INPUT_SOURCE=. \
		-e INPUT_DESTINATION=_site \
		-e INPUT_FUTURE=false \
		-e INPUT_BUILD_REVISION=local \
		-e INPUT_VERBOSE=true \
		-e INPUT_TOKEN=dummy \
		-v "$(CURDIR):$(WORKDIR)" \
		-w $(WORKDIR) \
		$(JEKYLL_IMAGE) \
		bundle exec jekyll build

test: build

serve:
	@set -eu; \
	cid="$$(docker run -d --rm \
		-p $(HOST_PORT):4000 \
		-v "$(CURDIR):$(WORKDIR)" \
		-w $(WORKDIR) \
		--entrypoint bash \
		$(JEKYLL_IMAGE) \
		-lc 'set -eu; mkdir -p "$(PREVIEW_DIR)"; bundle exec jekyll build --watch --destination "$(PREVIEW_DIR)" --config _config.yml,_config.local.yml & build_pid=$$!; until [ -f "$(PREVIEW_DIR)/index.html" ]; do if ! kill -0 $$build_pid >/dev/null 2>&1; then exit 1; fi; sleep 1; done; ruby -run -e httpd "$(PREVIEW_DIR)" -p 4000 -b 0.0.0.0 & httpd_pid=$$!; trap "kill $$httpd_pid $$build_pid >/dev/null 2>&1 || true" INT TERM EXIT; tail -f /dev/null')"; \
	cleanup() { docker stop "$$cid" >/dev/null 2>&1 || true; }; \
	trap cleanup INT TERM EXIT; \
	docker logs -f "$$cid"

clean:
	rm -rf _site .jekyll-cache
