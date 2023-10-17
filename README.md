# Submitted By: Himanshu Pandey.
# Email: himanshupandey2016@gmail.com.
# Task: Order-Manangement-System 
# Date: 2023-10-17

# Description:
Our database contains three main entities such as: 
- tbl_order_masters: This table has mainly contains field 'totalFee'.
- tbl_service_masters: This table has mainly contains field 'name'.
- tbl_order_service_mappings: This table has  mainly contains filed 'orderId' & 'serviceId'.

- We have perform following operations on orders and services such as:
- GetAll
- GetById
- Create
- Update
- Delete.

- I have used NodeJs  as a Server Enviroment with ExpressJs as a Framework to create APIs. 
- Have used Relational Database:MySQL as a database to manage the data of orders and services.

# Language Used:
- JavaScript.
# FromeWork Used:
- Express.js.
# DataBase Used:
- MySQL 
# ORM Used:
- Sequelize.
# Schema Validator Used:
- Ajv JSON schema validator.

#  HTTP METHODS With API End-Point :
Below are the HTTP Methods,API endpoints with short description:

# GET:
- GET: /order            - To get all orders
- GET: /order/:Id        - To get order by Id
- GET: /service          - To get all services
- GET: /service/:Id      - To get service by Id

# POST:
- POST: /service         - To create new service
- POST: /order           - To create new order

# PUT:
- PUT: /service/:Id      - To update service
- PUT: /order/:Id        - To update order (You will not able to update the order   which is created less than 3 hours ago)

# DELETE:
- DELETE: /order/:id     - To delere order by id
- DELETE: /service/:id   - To delere service by id


# What trade-offs you made:
- As a database I have chosen relational database(MySQL) as the order and service has fix schema and their relationship can be more managable with it.

# Any assumptions you made that affected your solution:
- When you delete any service, all the order attached with that service will also be deleted.
- I have used Ajv validators for Schema Validation thus when client sent request from
  req.body or whatever the datatype should be same as mentoined in schema validator otherwise it show validation error. i.e datatype sent by client should be same as schema Validator.

# Made Chanages for Production: 
- For production,need to encrypt sensitive data such as database configurations more precisely,encrypt 'config.json' file & stored it into '.env'file.
- I also need to create separate env files  configration for different environments.
- Need to ignore large files such as node_modules and sensitive files such as .env file into .gitignore file.
- I need to manage serviceId of orders in more detail. Currently I have considered simpler way.
- I need use separate test database for test cases. Initially in this implementation I have used the same database
- I need to apply pagination in getAll query, Also I can apply search order and services by keyword.

# Here are the steps to setup the project:
- Brief instructions on how to setup the environment to run your project:

# Step:1 
- Run 'npm install' or npm i 
- To Install all the dependencies.
# Step:2
- Create '.env' file and set 'db_username' and 'db_password'.

- In my case I have stored it in config.json file as I am in development enviroment but if you are implemented it in Production you must have to encrypt it first into .env file & do not push the file using .gitignore.

# Step : 3 
- Run 'npm run start'
(Help you to start your server).

# Security Measures:
- Used Sequelize ORM: To improve database security by avoiding the possibility of
  SQL Injection Attacks.

# Thunder Client Collection:
-  I have used Thunder Client as API Testing  Tool in Development Enviroment.
- Thunder Client is a extension avaliable in VsCode Editor for API Testing.
# For API TESTING:
- Import 'thunder-collection_order-management.json' file 
- (which is available in this main folder) to your postman to get the documentation of all the endpoints with sample success and error responses.

# Time Spent To Complete The Task:
- I have included almost all the requirements mentioned. It took 3.5 hours to implement all features including testing.

