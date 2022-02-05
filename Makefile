SHELL := /bin/bash
.DEFAULT_GOAL := help
LOCAL_API_EP := http://localhost:8080/api

install: ## Go get current dir
	go get .

serve: ## Serve Go server in the current dir. (required: air)
	echo Your current directory is:  $(pwd)
	echo Make sure you run this script at project root directory.
	go run .

test: 
	go test

echo-api-ep: ## echoes current local endpoint.
	echo $(LOCAL_API_EP)

test-run-get: ## Get the in-memory resource of /albums
	curl $(LOCAL_API_EP)/albums

test-run-get-by-id: ## Get the in-memory resource of /albums/${id}
	curl $(LOCAL_API_EP)/albums/2

test-run-post: ## Post the in-memory rousource of /albums
	curl $(LOCAL_API_EP)/albums \
    --include \
    --header "Content-Type: application/json" \
    --request "POST" \
    --data '{"id": "4","title": "The Modern Sound of Betty Carter","artist": "Betty Carter","price": 49.99}'

# https://postd.cc/auto-documented-makefile/
help: ## Draw help message
	@grep -h -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'