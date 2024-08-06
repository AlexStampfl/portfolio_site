import sqlite3


def displayAllData():
    # Connect to the database
    conn = sqlite3.connect('dogs.db')
    print("Database Connection Successful\n")

    # Create a cursor object
    cursor = conn.cursor()

    # Execute a SELECT command
    cursor.execute("SELECT * FROM dog")

    # Fetch and display the data
    data = cursor.fetchall()
    print("Records in the 'dog' table:\n")
    
    for row in data:
        print("ID:", row[0])
        print("Name:", row[1])
        print("Age:", row[2])
        print("Breed:", row[3])
        print("VET_COSTS: $" + str(row[4]))
        print()

    # Close the cursor and the connection
    cursor.close()
    conn.close()

if __name__ == "__main__":
    # createTable()  # Uncomment if you haven't created the table yet
    displayAllData()


def createTable():
    # Connect to the database
    conn = sqlite3.connect('dogs.db')
    # print("Opened database successfully")

    # Create a cursor object
    cursor = conn.cursor()

    # Create the 'dog' table if it doesn't exist
    cursor.execute('''CREATE TABLE IF NOT EXISTS dog
        (ID INTEGER PRIMARY KEY AUTOINCREMENT,
        Name TEXT NOT NULL,
        Age INT NOT NULL,
        Breed TEXT,
        Vet_Costs REAL);''')
    print('Table successfully created')

    # commit changes to db
    conn.commit()

    # Close the cursor and the connection
    cursor.close()
    conn.close()

def insertData(name, age, breed, vet_costs):
    # connect to db
    conn = sqlite3.connect('dogs.db')
    print("Opened database successfully\n")

    cursor = conn.cursor()

    # check if 'dog table exists
    cursor.execute("SELECT name from sqlite_master WHERE type='table' AND name='dog'")
    table_exists = cursor.fetchone()

    if not table_exists:
        # If the table doesn't exist, create it
        cursor.execute('''CREATE TABLE IF NOT EXISTS dog
            (ID INTEGER PRIMARY KEY AUTOINCREMENT,
            Name TEXT NOT NULL,
            Age INT NOT NULL,
            Breed TEXT,
            Vet_Costs REAL);''')
        print('Table successfully created')


    # Insert new data with unique 'ID' values
    cursor.execute("INSERT INTO dog (Name, Age, Breed, Vet_Costs) VALUES (?, ?, ?, ?)", (name, age, breed, vet_costs))

    # commit changes to db
    conn.commit()

    # close cursor and connection
    cursor.close()
    conn.close()


def displayData(cursor):
    # connect to db
    conn = sqlite3.connect('dogs.db')
    print("Database Connection Successful!")

    # create a cursor object
    cursor = conn.cursor()

    # Execute a SELECT command
    cursor.execute("SELECT * FROM dog")

    # Fetch and display the data
    data = cursor.fetchall()
    print("Records created successfully")

    for row in data:
        print("ID:", row[0])
        print("Name:", row[1])
        print("Age:", row[2])
        print("Breed:", row[3])
        print("VET_COSTS: $" + str(row[4]))
        print()

    # close cursor and conn
    cursor.close()
    conn.close()

# def updateVetCosts(cursor, name, conn):
#     # Update vet costs for Snoopy
#     cursor.execute("UPDATE dog SET Vet_Costs = 200.0 WHERE Name = 'Snoopy'")
#     # Commit changes to the database
#     conn.commit()

if __name__ == "__main__":
    createTable()