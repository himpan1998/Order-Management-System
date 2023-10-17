# Submitted By: Himanshu Pandey.
# Task: Order-Manangement-System 

# Description
There are 3 main entities/tables. 
1.tbl_order_masters,
2.tbl_service_masters & 
3.tbl_order_service_mappings.

- The table tbl_order_masters has field 'totalFee'.
- The table tbl_service_masters has field 'name'.
and 
- The table tbl_order_service_mappings has filed 'orderId','serviceId'.

- we have perform following operations on services and orders: Create, Update, GetAll, GetById and Delete.

I have used NodeJs  as a Server Enviroment with ExpressJs as a Framework to create APIs. Have used Relational Database:MySQL as a database to manage the data of orders and services.

# Language Used:
  - javaScript.
# FromeWork Used:
   - Express.js.
# DataBase Used:
  - MySQL (R.D.B.M.S).
# ORM Used:
  - Sequelize.
# Schema Validator Used:
  - Ajv Validator.

# API End-Points:
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


# What trade-offs you made
As a database I have chosen relational database(MySQL) as the order and service has fix schema and their relationship can be more managable with it.

# Any assumptions you made that affected your solution:
- When you delete any service, all the order attached with that service will also be deleted.
- I have used Ajv validators for Schema Validation thus when client sent request from
  req.body or whatever the datatype should be same as mentoined in schema validator otherwise it show validation error. i.e datatype sent by client should be same as schema Validator.

What you would change if you built this for production
# Made Chnages for Production: 
For production, I need to encrypt sensitive data such as DB configurations.
I also need to change env configurations. I will create separate env files for different environments.
I need to manage serviceId of orders in more detail. Currently I have considered simpler way
I need use separate test DB for test cases. Initially in this implementation I have used the same database
I need to apply pagination in getAll query, Also I can apply search order and services by keword.
# Here are the steps to setup the project:
Brief instructions on how to setup the environment to run your project:

# Step:1 
        -Run 'npm install' or npm i 
         (Will install all the packages includig node_modules file which earlier we placed  in .gitignore file.)
# Step:2
Create '.env' file and set 'DB_USER' and 'DB_PASSWORD'
Run 'npm run start'
Import 'WIN HOME INSPECTION.postman_collection.json' file (which is available in this main folder) to your postman to get the documentation of all the endpoints with sample success and error responses
Run 'npm run test' to run the test cases
What parts of the spec were completed, how much time you spent, and any particular problems you ran into

I have included almost all the requirements mentioned. It took 3.5 hours to implement all features including testing.

# Security Measures:
- <Used Sequelize ORM/>: To improve database security by avoiding the possibility of
  SQL Injection Attacks.