CREATE TABLE dragon
(
  id SERIAL PRIMARY KEY,
  birthdate TIMESTAMP NOT NULL,
  nickname VARCHAR(64),
  --USES UP TO 64 CHAR. DOES NOT HAVE TO BE 64. MORE CONVEINET                              THAN CHAR(64)
  "generationId" INTEGER,
  FOREIGN KEY ("generationId") REFERENCES generation(id)
);