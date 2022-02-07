// NOTE: @see: https://go.dev/doc/tutorial/web-service-gin
package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
)

type album struct {
	ID       string  `json:"id"`
	Title    string  `json:"title"`
	Artist   string  `json:"artist"`
	Price    float64 `json:"price"`
	ImageSrc string  `json:"imageSrc"`
}

var albums = []album{
	{
		ID:       "1",
		Title:    "DM",
		Artist:   "fromis9",
		Price:    2.4,
		ImageSrc: "/fromis9.jpeg",
	},
	{
		ID:       "2",
		Title:    "Airplane",
		Artist:   "iz*one",
		Price:    3.5,
		ImageSrc: "/izone.jpeg",
	},
	{
		ID:       "3",
		Title:    "That day",
		Artist:   "Lovelyz",
		Price:    2.6,
		ImageSrc: "/lovelyz.jpeg",
	},
}

// getAlbums responds with the list of all albums as JSON.
func getAlbums(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, albums)
}

// add new album
func postAlbums(c *gin.Context) {
	var newAlbum album

	// Call BindJSON to bind the received JSON to
	// newAlbum.ct.T
	if err := c.BindJSON(&newAlbum); err != nil {
		return
	}

	// create id
	if newAlbum.ID == "" {
		newAlbum.ID = uuid.New().String() // create new uuid if not set
	}

	// Add the new album to the slice.
	albums = append(albums, newAlbum)
	c.IndentedJSON(http.StatusCreated, newAlbum)
}

// getAlbumByID locates the album whose ID value matches the id
// parameter sent by the client, then returns that album as a response.
func getAlbumById(c *gin.Context) {
	id := c.Param("id")

	// Loop over the list of albums, looking for
	// an album whose ID value matched the parameter.
	for _, a := range albums {
		if a.ID == id {
			c.IndentedJSON(http.StatusOK, a)
			return
		}
	}
	c.IndentedJSON(http.StatusNotFound, gin.H{"message": "album not found"})
}

func setupRouter() *gin.Engine {
	router := gin.Default()

	api := router.Group("/api")
	{
		api.GET("/albums", getAlbums)
		api.POST("/albums", postAlbums)
		api.GET("/albums/:id", getAlbumById)
	}

	return router
}

func main() {
	router := setupRouter()
	router.Run("localhost:8080")
}
