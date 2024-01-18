CREATE TABLE MovieData (
    ID VARCHAR (10),
    Release_Date VARCHAR,
    Title VARCHAR (500),
    Overview VARCHAR (5000),
    Popularity VARCHAR (10),
    Vote_Count VARCHAR (100),
    Vote_Average VARCHAR (10),
    Original_Language VARCHAR,
    Genre VARCHAR (500),
    Poster_Url VARCHAR (500),
    PRIMARY KEY (ID)
);

COPY MovieData(ID, Release_Date, Title, Overview, Popularity, Vote_Count, Vote_Average, Original_Language, Genre, Poster_Url) FROM '/docker-entrypoint-initdb.d/mymoviedb.csv' DELIMITER ',' CSV HEADER;