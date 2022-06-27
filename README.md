# Why SQL?

      the LAMP uses (Linux, Apache, MySQL, PHP)

      the .NET stack uses SQL Server

# SQL vs. NoSQL

      SQL : Oracle, Microsoft SQL, MySQL (MariaDB), PostgreSQL, SQLite

      NoSQL : Google's Big Table, CouchDB, MongoDB, Neo4J, Apache HBase, Facebook's Cassandra,Redis, Elasticserach, DynamoDB

# SQLITE

- embedded IoT (Internet-of-Things) projects often use SQLite as a low-memory, file-based database

        CREATE TABLE "Notes" (
        "id"	INTEGER NOT NULL,
        "title"	TEXT,
        "body"	TEXT,
        PRIMARY KEY("id" AUTOINCREMENT)
        )

        INSERT INTO Notes (title,body) VALUES ("First Note", "This is the first note.")

        UPDATE Notes SET title = 'Changed Second Note' WHERE id = 2

        SELECT * FROM Employees WHERE BirthDate > '1960-01-01' ORDER BY BirthDate DESC

        SELECT e.EmployeeID, e.LastName, e.FirstName, et.TerritoryID FROM Employees AS e JOIN EmployeeTerritories AS et ON e.EmployeeID = et.EmployeeID

        SELECT e.EmployeeID, e.LastName, e.FirstName, et.TerritoryID,t.TerritoryDescription FROM Employees AS e
        JOIN EmployeeTerritories AS et ON e.EmployeeID = et.EmployeeID
        JOIN Territories AS t ON et.TerritoryID = t.TerritoryID
        WHERE e.EmployeeID = 1

# Good Tutorial

- [https://www.youtube.com/watch?v=I6ypD7qv3Z8]

- Includes the follow technologies:

        - React
        - TypeScript
        - GraphQL
        - URQL/Apollo
        - Node.js
        - PostgreSQL
        - MikroORM/TypeORM
        - Redis
        - Next.js
        - TypeGraphQL
        - Chakra

- The History of SQL Standards [https://learnsql.com/blog/history-of-sql-standards/]

## Serach for "How can I convert jason data to SQL data". Is there a simple way?
