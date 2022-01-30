SHELL := /bin/bash
.DEFAULT_GOAL := help

install: ## Go get current dir
	go get .

serve: ## Serve Go server in the current dir
	go run .

test-run-get: ## Get the in-memory resource of /albums
	curl http://localhost:8080/albums

test-run-post: ## Post the in-memory rousource of /albums
	curl http://localhost:8080/albums \
    --include \
    --header "Content-Type: application/json" \
    --request "POST" \
    --data '{"id": "4","title": "The Modern Sound of Betty Carter","artist": "Betty Carter","price": 49.99}'

# https://postd.cc/auto-documented-makefile/
help: ## Draw help message
	@grep -h -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'