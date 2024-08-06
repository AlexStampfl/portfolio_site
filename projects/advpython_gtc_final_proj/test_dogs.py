"""
To run the file, in the terminal, write pytest test_dogs.py
"""

import pytest
import sqlite
import sqlite3
import io
import sys
from dogs import resetDatabase

@pytest.fixture
def setup_database():
    sqlite.createTable()
    yield
    conn = sqlite3.connect('dogs.db')
    cursor = conn.cursor()
    cursor.execute("DROP TABLE IF EXISTS dog")
    conn.commit()
    conn.close()

def test_insert_and_display_data(setup_database):
    # Test the insertData and displayData functions
    # Insert sample data
    sqlite.insertData("Buddy", 3, "Golden Retriever", 150.0)

    # Connect to the database
    conn = sqlite3.connect('dogs.db')

    # Create a cursor object
    cursor = conn.cursor()

    # Display data and check if the inserted data is present
    captured_output = io.StringIO()
    sys.stdout = captured_output

    sqlite.displayData(cursor)

    sys.stdout = sys.__stdout__  # Reset redirect.

    # Check the printed output
    expected_output = "Records created successfully\nID: 1\nName: Buddy\nAge: 3\nBreed: Golden Retriever\nVET_COSTS: $150.0\n"
    # assert captured_output.getvalue().strip() == expected_output
    assert "Records created successfully" in captured_output.getvalue()
    assert "ID:" in captured_output.getvalue()
    assert "Name:" in captured_output.getvalue()
    assert "Age:" in captured_output.getvalue()
    assert "Breed:" in captured_output.getvalue()

    # Close the cursor and the connection
    cursor.close()
    conn.close()

def test_reset_database(setup_database):
    # Test the resetDatabase function
    # Create the 'dog' table
    sqlite.createTable()
    
    # Insert sample data
    sqlite.insertData("Buddy", 3, "Golden Retriever", 150.0)
    resetDatabase(ask_confirmation=False)

    # Reset the database
    resetDatabase()

    # Connect to the database
    conn = sqlite3.connect('dogs.db')

    # Create a cursor object
    cursor = conn.cursor()

    # Display data and check if the database is empty
    captured_output = io.StringIO()
    sys.stdout = captured_output

    sqlite.displayData(cursor)

    sys.stdout = sys.__stdout__  # Reset redirect.

    # Check the printed output
    expected_output = "Records created successfully\n"
    assert captured_output.getvalue().strip() == expected_output

    # Close the cursor and the connection
    cursor.close()
    conn.close()
