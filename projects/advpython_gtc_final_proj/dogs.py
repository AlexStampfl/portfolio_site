# -*- coding: utf-8 -*-
"""
Final Project
Sqlite database: dogs.db
table: dogs
Created on Saturday Nov 25 2023

@author: alexs
"""

# Import gui libraries
from tkinter import *
from tkinter import filedialog, scrolledtext, messagebox, ttk
from sqlite import insertData, displayData, createTable, displayAllData
import sqlite3

# call create_table to ensure table exists
createTable()

root = Tk()
root.title("Adv Python Final Project Dog App")

# Set the geometry
root.geometry("650x400") # width x height

def print_width():
    ''' Set width and height of gui window '''
    print("The width of Tkinter window:", root.winfo_width())
    print("The height of the Tkinter window:", root.winfo_height())

def About():
    messagebox.showinfo(title="About", message="Dog GUI Applications")


def display():
    dog_name = entry.get()
    breed_selection = combobox.get()
    message = f"Dog Name: {dog_name}\nBreed: {breed_selection}\nAge: {Age}\nVet_Cost: {vet_cost}"
    messagebox.showinfo(title="Display", message = message)


def displayAllRecords():
    ''' Display ALL Records in the dogs database '''
    # connect to db
    conn = sqlite3.connect('dogs.db')
    # print("Opened database successfully")

    # create cursor object
    cursor = conn.cursor()

    # execute select command
    cursor.execute("SELECT * FROM dog")

    # Fetch and display the data
    data = cursor.fetchall()
    print("Records in the 'dog' table:\n")

    # close cursor and the connection
    cursor.close()
    conn.close()

    # create a new window to display the records
    # display_window = Toplevel(root)
    display_window.title("All Records in Database")
    displayAllData()

def calculate_discounted_cost(vet_cost):
    # 10% discount to vet cost
    discount_percentage = 0.10
    discounted_cost = vet_cost - (vet_cost * discount_percentage)
    return round(discounted_cost, 2)


# def add_dogs(entry, entry3, combobox, entry4):
def add_dogs(entry, entry3, combobox, entry4):
    ''' Add new dog records to the database '''
    dog_name = entry.get()
    age = entry3.get()
    breed_selection = combobox.get()
    vet_cost = float(entry4.get())

    # use map to calculate discounted vet cost
    discounted_cost = list(map(calculate_discounted_cost, [vet_cost]))[0]

    # call insertData function from the sqlite module to add data to db
    # insertData(dog_name, age, breed_selection, vet_cost)
    insertData(dog_name, age, breed_selection, discounted_cost)

    # Display a message that data was added
    messagebox.showinfo(title="Add Dog", message=f"Dog '{dog_name}' added successfully.\n10% Vet Service Discount Applied.\n${discounted_cost} After Discount. Original Cost is ${vet_cost}.")

    # clear input boxes
    entry.delete(0, END)
    entry3.delete(0, END)
    combobox.set("")
    entry4.delete(0, END)


def display_db():
    # Call displayData functionto fetch and display data
    displayData()


def clearEntry():
    entry.delete(0, END)
    combobox.set("")


def quitProgram():
    ''' to Quit application '''
    root.quit()

def resetDatabase(ask_confirmation=True):
    """Clear all records from the 'dog' table in the database."""
    # Optionally ask for confirmation
    if ask_confirmation:
        answer = messagebox.askyesno("Confirmation", "Are you sure you want to reset the database?")
        if not answer:
            return

    # Connect to the db
    conn = sqlite3.connect('dogs.db')
    cursor = conn.cursor()

    # Delete all records
    cursor.execute("DELETE FROM dog")

    # Drop and recreate the 'dog' table
    cursor.execute("DROP TABLE IF EXISTS dog")
    createTable()

    # Commit changes and close connection
    conn.commit()
    conn.close()


def deleteDogs():
    # Connect to db
    conn = sqlite3.connect('dogs.db')

    # create cursor object
    cursor = conn.cursor()

    try:
        # get id of last record
        cursor.execute("SELECT MAX(ID) FROM dog")
        last_id = cursor.fetchone()[0]

        if last_id is not None:
            # delete record with last id
            cursor.execute("DELETE FROM dog WHERE ID = ?", (last_id,))

            # commit changes to db
            conn.commit()

            print(f"Deleted dog with ID {last_id}")
        else:
            print("No records to delete.")
    except sqlite3.Error as e:
        print("Error deleting dog:", e)
    finally:
        # close cursor and connection
        cursor.close()
        conn.close()

deleteDogs()





# Menu Widget
menubar = Menu(root)
root.config(menu=menubar)

# File
file_menu = Menu(menubar, tearoff=0)
menubar.add_cascade(label="File", menu=file_menu)

# Help
help_ = Menu(menubar, tearoff=0)
menubar.add_cascade(label="Help", menu=help_)

'''Menu Items'''
# Add items to 'File' menu
file_menu.add_command(label="Clear", command=clearEntry)
file_menu.add_separator() # Adds a separator line
file_menu.add_command(label="Exit", command=root.quit)

# Add items to 'Help' menu
help_.add_command(label="About", command=About)



''' this is where the user enters info in the input boxes '''
# Dog and Breed(dropdown list)

# spacer1 label
spacer = ttk.Label(root, text="")
spacer.grid(row = 0, column=1)

# space 2 label
space2 = ttk.Label(root, text="")
space2.grid(row=5, column=1)

# Dog Name
label1 = ttk.Label(root, text = "Dog Name")
entry = ttk.Entry(root, width = 30)
label1.grid(row = 1, column=1)
entry.grid(row=1, column=2)

# Breed - drop down list
label2 = ttk.Label(root, text = "Breed")
breed = StringVar()
combobox = ttk.Combobox(root, textvariable=breed)

label2.grid(row=2, column=1)
entry.get()
label2.config(justify=LEFT)

# Dog age
label3 = ttk.Label(root, text = "Age")
entry3 = ttk.Entry(root, width = 30)
label3.grid(row=3, column=1)
entry3.grid(row=3, column=2)

# Vet Cost
label4 = ttk.Label(root, text = "Vet Cost")
entry4 = ttk.Entry(root, width = 30)
label4.grid(row=4, column=1)
entry4.grid(row=4, column=2)


combobox.grid(row=2, column=2)
combobox.config(justify = LEFT)

combobox.config(value = (
    'German Shepherd', 'Golden Doodle', 'Golden Retreiver', 'Collie', 'Bordercollie', 'Poodle', 'Beagle', 'Mutt', 'Mixed', 'Sheltie'
))

# Add buttons to gui window
# displaybutton = ttk.Button(root, text = "Display", command=display)
quitbutton = ttk.Button(root, text = "Quit", command=quitProgram)
adddogs = ttk.Button(root, text="Add", command=lambda: add_dogs(entry, entry3, combobox, entry4))
resetbutton = ttk.Button(root, text="Reset Database", command=resetDatabase)
displayAllButton = ttk.Button(root, text="Display All Records", command=displayAllData)
deletebutton = ttk.Button(root, text = "Delete", command=deleteDogs)

# displaybutton.grid(row=6, column=0)
quitbutton.grid(row=6, column=2)
adddogs.grid(row=9, column=1)
resetbutton.grid(row=9, column=2)
displayAllButton.grid(row=9, column=3)
deletebutton.grid(row=6,column=3)

root.mainloop()
