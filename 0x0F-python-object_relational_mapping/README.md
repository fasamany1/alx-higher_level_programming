# 0x0F. Python - Object-relational mapping


## Before you start…
**Please make sure your MySQL server is in 8.0** -> <a href="https://intranet.alxswe.com/rltoken/paGukker_0KoG3D9FqymNQ">How to install MySQL 8.0 in Ubuntu 20.04</a>

## Background Context

In this project, you will link two amazing worlds: Databases and Python!

In the first part, you will use the module ```MySQLdb``` to connect to a MySQL database and execute your SQL queries.

In the second part, you will use the module ```SQLAlchemy``` (don’t ask me how to pronounce it…) an Object Relational Mapper (ORM).

The biggest difference is: no more SQL queries! Indeed, the purpose of an ORM is to abstract the storage to the usage. With an ORM, your biggest concern will be “What can I do with my objects” and not “How this object is stored? where? when?”. You won’t write any SQL queries only Python code. Last thing, your code won’t be “storage type” dependent. You will be able to change your storage easily without re-writing your entire project.

Without ORM:

```
conn = MySQLdb.connect(host="localhost", port=3306, user="root", passwd="root", db="my_db", charset="utf8")
cur = conn.cursor()
cur.execute("SELECT * FROM states ORDER BY id ASC") # HERE I have to know SQL to grab all states in my database
query_rows = cur.fetchall()
for row in query_rows:
    print(row)
cur.close()
conn.close()
```

With an ORM:

```
engine = create_engine('mysql+mysqldb://{}:{}@localhost/{}'.format("root", "root", "my_db"), pool_pre_ping=True)
Base.metadata.create_all(engine)

session = Session(engine)
for state in session.query(State).order_by(State.id).all(): # HERE: no SQL query, only objects!
    print("{}: {}".format(state.id, state.name))
session.close()
```

Do you see the difference? Cool, right?

The biggest difficulty with ORM is: The syntax!

Indeed, all of them have the same type of syntax, but not always. Please read tutorials and don’t read the entire documentation before starting, just jump on it if you don’t get something.

## Resources

**Read or watch:**

* <a href="https://intranet.alxswe.com/rltoken/a8DUOWhXpNX3TEwgyT-U8A">Object-relational mappers</a>
* <a href="https://intranet.alxswe.com/rltoken/JtFaKjnqxudr6Hi05Us1Lw">mysqlclient/MySQLdb documentation</a> (please don’t pay attention to _mysql)
* <a href="https://intranet.alxswe.com/rltoken/TdUSYFNGbXJG1WjCEoq5FA">MySQLdb tutorial</a>
* <a href="https://intranet.alxswe.com/rltoken/YyL5hsscviNH04XGW-XpfA">SQLAlchemy tutorial</a>
* <a href="https://intranet.alxswe.com/rltoken/j9azWF2Db_2rNolTxOF3SA">SQLAlchemy</a>
* <a href="https://intranet.alxswe.com/rltoken/0zLhY9KqKjn-zmdb7X598Q">mysqlclient/MySQLdb</a>
* <a href="https://intranet.alxswe.com/rltoken/pw50Bl1Bj84wksxm018dwA">Introduction to SQLAlchemy</a>
* <a href="https://intranet.alxswe.com/rltoken/B-xIdMtGvpus8vHxAIRrPg">Flask SQLAlchemy</a>
* <a href="https://intranet.alxswe.com/rltoken/deIzPMrfK8Ixqm-AboFHWg">10 common stumbling blocks for SQLAlchemy newbies</a>
* <a href="https://intranet.alxswe.com/rltoken/dZfUNK3lJicGMK5PU0bE7Q">Python SQLAlchemy Cheatsheet</a>
* <a href="https://intranet.alxswe.com/rltoken/hNxBKC8lHge5XjsRO8ksHQ">SQLAlchemy ORM Tutorial for Python Developers</a> (Warning: This tutorial is with PostgreSQL, but the concept of SQLAlchemy is the same with MySQL)
* <a href="https://intranet.alxswe.com/rltoken/5G_R2NmQRFqiZb84qxYERQ">SQLAlchemy Tutorial</a>

## Learning Objectives

At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

### General
* Why Python programming is awesome
* How to connect to a MySQL database from a Python script
* How to SELECT rows in a MySQL table from a Python script
* How to INSERT rows in a MySQL table from a Python script
* What ORM means
* How to map a Python Class to a MySQL table

## Requirements

### General

* Allowed editors: vi, vim, emacs
* All your files will be interpreted/compiled on Ubuntu 20.04 LTS using python3 (version 3.8.5)
* Your files will be executed with MySQLdb version 2.0.x
* Your files will be executed with SQLAlchemy version 1.4.x
* All your files should end with a new line
* The first line of all your files should be exactly #!/usr/bin/python3
* A README.md file, at the root of the folder of the project, is mandatory
* Your code should use the pycodestyle (version 2.8.*)
* All your files must be executable
* The length of your files will be tested using wc
* All your modules should have a documentation (python3 -c 'print(__import__("my_module").__doc__)')
* All your classes should have a documentation (python3 -c 'print(__import__("my_module").MyClass.__doc__)')
* All your functions (inside and outside a class) should have a documentation (python3 -c 'print(__import__("my_module").my_function.__doc__)' and python3 -c 'print(__import__("my_module").MyClass.my_function.__doc__)')
* A documentation is not a simple word, it’s a real sentence explaining what’s the purpose of the module, class or method (the length of it will be verified)
* You are not allowed to use execute with sqlalchemy

## More Info

### Install ```MySQLdb``` module version ```2.0.x```

For installing MySQLdb, you need to have MySQL installed: How to install MySQL 8.0 in Ubuntu 20.04

```
$ sudo apt-get install python3-dev
$ sudo apt-get install libmysqlclient-dev
$ sudo apt-get install zlib1g-dev
$ sudo pip3 install mysqlclient
...
$ python3
>>> import MySQLdb
>>> MySQLdb.version_info
(2, 0, 3, 'final', 0)
```

Install ```SQLAlchemy``` module version ```1.4.x```

```
$ sudo pip3 install SQLAlchemy
...
$ python3
>>> import sqlalchemy
>>> sqlalchemy.__version__
'1.4.22'
```

Also, you can have this warning message:

```
/usr/local/lib/python3.4/dist-packages/sqlalchemy/engine/default.py:552: Warning: (1681, "'@@SESSION.GTID_EXECUTED' is deprecated and will be removed in a future release.")
  cursor.execute(statement, parameters)
```

You can ignore it.
