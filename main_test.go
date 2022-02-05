package main

import (
	"bytes"
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/go-playground/assert/v2"
)

func TestGetAlbums(t *testing.T) {
	router := setupRouter()

	w := httptest.NewRecorder()
	req, _ := http.NewRequest("GET", "/api/albums", nil)
	router.ServeHTTP(w, req)

	assert.Equal(t, 200, w.Code)
}

func TestPostAlbums(t *testing.T) {
	router := setupRouter()

	w := httptest.NewRecorder()

	testAlbum := album{
		ID:     "9999",
		Title:  "hoge-title",
		Artist: "hoge-artist",
		Price:  float64(30.11),
	}

	testAlbumJson, _ := json.Marshal(testAlbum)

	req, _ := http.NewRequest("POST", "/api/albums", bytes.NewBuffer(
		testAlbumJson,
	))

	router.ServeHTTP(w, req)

	assert.Equal(t, 201, w.Code)

	for _, alb := range albums {
		if alb.ID == testAlbum.ID {
			assert.Equal(t, alb.Title, testAlbum.Title)
			assert.Equal(t, alb.Artist, testAlbum.Artist)
			assert.Equal(t, alb.Price, testAlbum.Price)
		}
	}
}

func TestGetAlbumById(t *testing.T) {
	router := setupRouter()

	w := httptest.NewRecorder()

	req, _ := http.NewRequest("GET", "/api/albums/1", nil)

	router.ServeHTTP(w, req)

	assert.Equal(t, 200, w.Code)
}

func TestGetAlbumByIdNotFound(t *testing.T) {
	router := setupRouter()

	w := httptest.NewRecorder()

	req, _ := http.NewRequest("GET", "/api/albums/99999999", nil)

	router.ServeHTTP(w, req)

	assert.Equal(t, 404, w.Code)
}
