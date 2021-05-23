CREATE TABLE User (
  userId   INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  password VARCHAR(50) NULL,
  PRIMARY KEY ('userId')
);

CREATE TABLE Vol (
  volId INT NOT NULL AUTO_INCREMENT
  codeDepart  VARCHAR(50) NOT NULL,
  codeDestination VARCHAR(50) NOT NULL,
  prix  NUMBER(3),
  PRIMARY KEY ('volId')
);

CREATE TABLE Reservation (
  reservationId INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY ('reservationId'),
  FOREIGN KEY (userId) REFERENCES User(userId),
  FOREIGN KEY (volId) REFERENCES Vol(volId)
);

INSERT INTO User (userId, name, password) VALUES (1, 'toto', '123456');

INSERT INTO Vol (volId, codeDepart, codeDestination, prix) VALUES (2, 'JFK', 'CDG', 250);
INSERT INTO Vol (volId, codeDepart, codeDestination, prix) VALUES (4, 'DTW', 'JFK', 155);
INSERT INTO Reservation (reservationId, userId, volId) VALUES (1, 1, 1);

