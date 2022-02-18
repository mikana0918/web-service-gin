// NOTE: @see: https://go.dev/doc/tutorial/web-service-gin
package main

import (
	"example/web-service-gin/models"
	"example/web-service-gin/repositories"
	"fmt"
	"net/http"

	"os"

	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
)

// getAlbums responds with the list of all albums as JSON.
func getAlbums(c *gin.Context) {
	albums := repositories.List()

	c.IndentedJSON(http.StatusCreated, albums)
}

// add new album
func postAlbums(c *gin.Context) {
	var newAlbum models.Album

	// Call BindJSON to bind the received JSON to
	// newAlbum.ct.T
	if err := c.BindJSON(&newAlbum); err != nil {
		return
	}

	// create id
	if newAlbum.ID == "" {
		newAlbum.ID = uuid.New().String() // create new uuid if not set
	}

	repositories.Create(newAlbum)

	c.IndentedJSON(http.StatusCreated, newAlbum)
}

// getAlbumByID locates the album whose ID value matches the id
// parameter sent by the client, then returns that album as a response.
func getAlbumById(c *gin.Context) {
	id := c.Param("id")

	album := repositories.GetById(id)

	c.IndentedJSON(http.StatusNotFound, album)
}

func deleteById(c *gin.Context) {
	var album models.Album

	id := c.Param("id")

	repositories.Destroy(id)

	c.IndentedJSON(http.StatusCreated, album)
}

func setupRouter() *gin.Engine {
	router := gin.Default()

	router.GET("/health", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "alive",
		})
	})

	api := router.Group("/api")
	{
		api.GET("/albums", getAlbums)
		api.POST("/albums", postAlbums)
		api.GET("/albums/:id", getAlbumById)
		api.DELETE("/albums/:id", deleteById)
	}

	return router
}

func main() {
	router := setupRouter()
	models.ConnectDatabase()
	router.Run(fmt.Sprintf(":%s", os.Getenv("PORT"))) // need reverse proxy if we want to run on localhost:8080
}
