--psql -U zachariah -d tunr_db -a -f ./db/table-songs.sql--

CREATE TABLE songs (
	id serial PRIMARY KEY,
	title VARCHAR (255) NOT NULL,
	album VARCHAR (255),
	preview_link TEXT,
	artwork TEXT,
	artist_id INTEGER REFERENCES artists(id) ON DELETE CASCADE
);