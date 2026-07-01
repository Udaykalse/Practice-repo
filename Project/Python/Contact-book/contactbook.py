from tkinter import *
from tkinter import messagebox

# ---------------- Window ----------------
root = Tk()
root.geometry("700x550")
root.config(bg="#d3f3f5")
root.title("PythonGeeks Contact Book")
root.resizable(False, False)

# ---------------- Contact List ----------------
contactlist = [
    ['Siddharth Nigam', '369854712'],
    ['Gaurav Patil', '521155222'],
    ['Abhishek Nikam', '78945614'],
    ['Sakshi Gaikwad', '58745246'],
    ['Mohit Paul', '5846975'],
    ['Karan Patel', '5647892'],
    ['Sam Sharma', '89685320'],
    ['John Maheshwari', '98564785'],
    ['Ganesh Pawar', '85967412']
]

Name = StringVar()
Number = StringVar()

# ---------------- Frame ----------------
frame = Frame(root)
frame.pack(side=RIGHT, padx=10, pady=10)

scroll = Scrollbar(frame, orient=VERTICAL)

select = Listbox(
    frame,
    yscrollcommand=scroll.set,
    font=("Times New Roman", 16),
    bg="#f0fffc",
    width=20,
    height=20,
    borderwidth=3,
    relief="groove"
)

scroll.config(command=select.yview)
scroll.pack(side=RIGHT, fill=Y)
select.pack(side=LEFT, fill=BOTH)


# ---------------- Reset Entries ----------------
def EntryReset():
    Name.set("")
    Number.set("")


# ---------------- Selected ----------------
def Selected():
    if len(select.curselection()) == 0:
        messagebox.showerror("Error", "Please Select a Contact")
        return None
    return select.curselection()[0]


# ---------------- Refresh List ----------------
def Select_set():
    contactlist.sort()
    select.delete(0, END)

    for name, phone in contactlist:
        select.insert(END, name)


# ---------------- Add ----------------
def AddContact():
    if Name.get() != "" and Number.get() != "":
        contactlist.append([Name.get(), Number.get()])
        Select_set()
        EntryReset()
        messagebox.showinfo("Success", "Contact Added Successfully")
    else:
        messagebox.showerror("Error", "Please fill all fields")


# ---------------- Update ----------------
def UpdateDetail():
    index = Selected()

    if index is None:
        return

    if Name.get() == "" or Number.get() == "":
        messagebox.showerror("Error", "Please fill all fields")
        return

    contactlist[index] = [Name.get(), Number.get()]
    Select_set()
    EntryReset()

    messagebox.showinfo("Success", "Contact Updated Successfully")


# ---------------- Delete ----------------
def Delete_Entry():
    index = Selected()

    if index is None:
        return

    result = messagebox.askyesno(
        "Confirmation",
        "Do you want to delete this contact?"
    )

    if result:
        del contactlist[index]
        Select_set()
        EntryReset()


# ---------------- View ----------------
def VIEW():
    index = Selected()

    if index is None:
        return

    Name.set(contactlist[index][0])
    Number.set(contactlist[index][1])


# ---------------- Exit ----------------
def EXIT():
    root.destroy()


# Load contacts
Select_set()

# ---------------- Labels ----------------
Label(
    root,
    text="Name",
    font=("Times New Roman", 22, "bold"),
    bg="SlateGray3"
).place(x=30, y=20)

Entry(root, textvariable=Name, width=30).place(x=200, y=30)

Label(
    root,
    text="Contact No.",
    font=("Times New Roman", 20, "bold"),
    bg="SlateGray3"
).place(x=30, y=70)

Entry(root, textvariable=Number, width=30).place(x=200, y=80)

# ---------------- Buttons ----------------
Button(
    root,
    text="ADD",
    font=("Helvetica", 18, "bold"),
    bg="#e8c1c7",
    command=AddContact,
    padx=20
).place(x=50, y=140)

Button(
    root,
    text="EDIT",
    font=("Helvetica", 18, "bold"),
    bg="#e8c1c7",
    command=UpdateDetail,
    padx=20
).place(x=50, y=200)

Button(
    root,
    text="DELETE",
    font=("Helvetica", 18, "bold"),
    bg="#e8c1c7",
    command=Delete_Entry,
    padx=10
).place(x=50, y=260)

Button(
    root,
    text="VIEW",
    font=("Helvetica", 18, "bold"),
    bg="#e8c1c7",
    command=VIEW,
    padx=20
).place(x=50, y=325)

Button(
    root,
    text="RESET",
    font=("Helvetica", 18, "bold"),
    bg="#e8c1c7",
    command=EntryReset,
    padx=10
).place(x=50, y=390)

Button(
    root,
    text="EXIT",
    font=("Helvetica", 24, "bold"),
    bg="tomato",
    command=EXIT
).place(x=250, y=470)

root.mainloop()
