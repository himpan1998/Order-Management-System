# Submission By:Himanshu Pandey.
# Task: Order-Manangement-System 

# Description
There are 3 main entities. Table: tbl_order_masters,Table: tbl_service_masters and tbl_order_service_mappings.
The table tbl_order_masters has field 'totalFee'.The table tbl_service_masters has field 'name'.
and The table tbl_order_service_mappings has filed 'orderId','serviceId'.
You can do following operations on services and orders: Create, Update, GetAll, GetById and Delete.

I have used nodeJs with expressJs framework to create APIs. Have used MySQL as a database to manage the data of orders and services.

# Language Used:
  - javaScript
# FromeWork Used:
   - Express.js
# DataBase Used:
  - MySQL (RDBMS)
# ORM Used:
  - Sequelize
# Schema Validator Used:
  - ajv 

# API End-Points:
Below are the endpoints with short description
POST: /service - To create new service

PUT: /service/:serviceId - To update service

GET: /service - To get all services

GET: /service/:serviceId - To get service by Id

DELETE: /service/:serviceId - To delere service by id

POST: /order - To create new order

PUT: /order/:orderId - To update order (You will not able to update the order which is created less than 3 hours ago)

GET: /order - To get all orders

GET: /order/:orderId - To get order by Id

DELETE: /order/:orderId - To delere order by id

# What trade-offs you made
As a database I have chosen relational database(MySQL) as the order and service has fix schema and their relationship can be more managable with it.

# Any assumptions you made that affected your solution:
When you delete any service, all the order attached with that service will also be deleted
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