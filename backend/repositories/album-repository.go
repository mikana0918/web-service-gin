package repositories

import (
	"example/web-service-gin/models"
)

func List() []models.Album {
	var albums []models.Album

	models.DB.Find(&albums)

	return albums
}

func Create(album models.Album) {
	models.DB.Create(&models.Album{
		ID:       album.ID,
		Title:    album.Title,
		Artist:   album.Artist,
		Price:    album.Price,
		ImageSrc: album.ImageSrc,
	})
}

func GetById(id string) models.Album {
	var albums models.Album

	models.DB.First(&albums, id)

	return albums
}

func Destroy(id string) {
	models.DB.Delete(id)
}
