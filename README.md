# Submitted By: Himanshu Pandey.

# Email: himanshupandey2016@gmail.com.
<<<<<<< HEAD

# Submission Date: 2023-10-17

# Task: Order-Management-System.

# Task Description:

- To Build an order management system.
- Need to provide a service that allows other system and teams to obtain information about orders.

# Deliverables:

- Make an Internal Web service API for managing Orders.
- Test suite to validate the web services and library work as expected.

# API Requirement:

- We have made following API'S for both orders and services such as:
=======
# Submission Date: 2023-10-18

# Task: Order-Management-System.
# Task Description:
- To Build an order management system.
- Need to provide a service that allows other system and teams to obtain information about orders.

# Deliverables:
- Make an Internal Web services API'S for managing Orders.
- Test suite to validate the web services and library works expected. 

# API Requirement:
- We have perform following operations on orders and services such as:
>>>>>>> 372dd188999ecd9a4066b664adbb04553b1efd7f
- GetAll
- GetById
- Create
- Update
- Delete.
<<<<<<< HEAD

- I have used NodeJs as a Server-Side Environment with ExpressJs as a Framework to create APIs.

# API Constraints/Limitations:

-Service Should return error on creation/updating an order within 3 hrs of a pre-existing order.

# Data Base Description:

- Have used Relational Database:MySQL as a database to manage the data of orders and services.
- Our database contains three main entities such as:
- tbl_order_masters: This table has mainly contains field 'totalFee'.
- tbl_service_masters: This table has mainly contains field 'name'.
- tbl_order_service_mappings: This table has mainly contains filed 'orderId' & 'serviceId'.
=======
- I have used NodeJs as a Server-Side Environment with ExpressJs as a Framework to create APIs.
# API Constraints:
- Service Should return error on creation/updating an order within 3 hrs of a pre-existing order.
# Data Base Description:
 - Have used Relational Database:MySQL as a database to manage the data of orders and services.
 -Our database contains three main entities such as: 
- tbl_order_masters: This table has mainly contains field 'totalFee'.
- tbl_service_masters: This table has mainly contains field 'name'.
- tbl_order_service_mappings: This table has  mainly contains filed 'orderId' & 'serviceId'.
>>>>>>> 372dd188999ecd9a4066b664adbb04553b1efd7f

# Language Used:

- JavaScript.
<<<<<<< HEAD

# FrameWork Used:

=======
# Frame-Work Used:
>>>>>>> 372dd188999ecd9a4066b664adbb04553b1efd7f
- Express.js.

# DataBase Used:

- MySQL

# ORM Used:

- Sequelize.

# Schema Validator Used:

- Ajv JSON schema validator.
<<<<<<< HEAD

# HTTP METHODS With API End-Point :

- Below are the HTTP Methods,API endpoints with short description:

# GET:

- GET: /order - To get all orders
- GET: /order/:Id - To get order by Id
- GET: /service - To get all services
- GET: /service/:Id - To get service by Id
=======
  
#  API End-Point :
Below are the HTTP Methods,API endpoints with short description:

# GET:
- GET: /order            - To get all orders
- GET: /order/:id        - To get order by Id
- GET: /service          - To get all services
- GET: /service/:id      - To get service by Id
>>>>>>> 372dd188999ecd9a4066b664adbb04553b1efd7f

# POST:

- POST: /service - To create new service
- POST: /order - To create new order

# PUT:
<<<<<<< HEAD

- PUT: /service/:Id - To update service
- PUT: /order/:Id - To update order (You will not able to update the order which is created less than 3 hours ago)

# DELETE:

- DELETE: /order/:id - To delete order by id
- DELETE: /service/:id - To delete service by id

# HTTP STATUS Code Used:

- I have used following HTTP Code to making API'S:
- 200 - Ok,Success,
- 201 - New Resource Created,
- 204 - No Content/Records Found,
- 400 - Bad Request/Syntax Error/Validation Error,
- 500 - Internal Server Error.

# What trade-offs you made:

- As a database I have chosen relational database(MySQL) as the order and service has fix schema and their relationship can be more manageable with it.

# Any assumptions you made that affected your solution:

- When you delete any service, all the order attached with that service will also be deleted.
- Although I have implemented Soft Delete features. i.e data should still present in database after deletion.
- I have used Ajv validators for Schema Validation thus when client sent request from
  req.body or whatever the datatype should be same as mentioned in schema validator otherwise it show validation error. i.e datatype sent by client should be same as schema Validator.

# Made Changes for Production:

- For production,need to encrypt sensitive data such as database configurations more precisely,encrypt 'config.json' file & stored it into '.env' file.
- I also need to create separate env files configuration for different environments.
=======
- PUT: /service/:id      - To update service
- PUT: /order/:id        - To update order (You will not able to update the order   which is created less than 3 hours ago)

# DELETE:
- DELETE: /order/:id     - To delete order by id
- DELETE: /service/:id   - To delete service by id

# HTTP STATUS CODE:
 - I have used following HTTP Status Code for making API'S. 
 - 200 - OK success,
 - 201 -New Recourses Created,
 - 400 -Bad Request/Validation Error,
 - 500 -Internal Server Error.

# Trade-offs Made:
- As a database I have chosen relational database(MySQL) as the order and service has fix schema and their relationship can be more manageable with it. 
- To store data related to service associated with orders have stored in another table called tbl_order_service_mappings.

# Assumptions Made:
- When you delete any order,all the service attached with that order will also be deleted(Soft delete).Order will be  deleted from 'tbl_order_masters' & 
 the order associated with service will be delete from 'tbl_order_service_mappings'.

- Similarly, When you delete any service, all the order attached with that service will also be deleted(Soft Delete) from 'tbl_order-service_mappings' table.

- I have used Ajv validators for Schema Validation thus when client sent request from
  req.body or whatever the datatype should be same as mentioned in input schema validator.

-otherwise it show validation error. i.e datatype sent by client should be same as schema Validator. It will avoid several security breaches.

# Changes for Production:  
- For production,need to encrypt sensitive data such as database configurations more precisely,encrypt 'config.json' file & stored it into '.env' file.
- I also need to create separate env files  configuration for different environments.
>>>>>>> 372dd188999ecd9a4066b664adbb04553b1efd7f
- Need to ignore large files such as node_modules and sensitive files such as .env file into .gitignore file.
- I need to manage serviceId of orders in more detail. Currently I have considered simpler way.
- I need use separate test database for test cases. Initially in this implementation I have used the same database
- I need to apply pagination in getAll query, Also I can apply search order and services by keyword.

<<<<<<< HEAD
# Environment SetUp:
=======
# Environment Setup:
- Here are the steps too setup the  project:
>>>>>>> 372dd188999ecd9a4066b664adbb04553b1efd7f

- Here are the steps to setup the project:

# Step:1

- Run 'npm install' or npm i
- To Install all the dependencies.

# Step:2

- Create '.env' file and set 'db_username' and 'db_password'.

- In my case I have stored it in config.json file as I am in development environment but if you are implemented it in Production you must have to encrypt it first into .env file & do not push the file using .gitignore.
<<<<<<< HEAD

- I have defined the PORT of my development environment in .env file.

- So if you want to clone & run this project to your development
  environment you need to first create .env file & then you need to specified the port number in which you want to run your application in .env file.

- In my case it is running on PORT=5002 so if you want to run in same port as I used then you just need to create .env file & set PORT=5002 in .env file.

# Step : 3
=======
- I have defined the PORT of my development environment in .env file.
- So if you want to clone & run this project to your development environment you need to first create .env file & then need to modified the port number to .env file in which you want to run your application.
- In my case I am running my application on PORT=5002 So if  you want to run in same port as I used then just need to create .env file & add PORT=5002 in .env file.
>>>>>>> 372dd188999ecd9a4066b664adbb04553b1efd7f

- Run 'npm run start'
<<<<<<< HEAD
  -Help you to start your server.
=======
-Help you to start your server.
>>>>>>> 372dd188999ecd9a4066b664adbb04553b1efd7f

# Security Measures:

- Used Sequelize ORM: To improve database security by avoiding the possibility of
  SQL Injection Attacks.
- Used Ajv JSON Validator: Will force to the client to send same input data type as mentioned in input schema validation thus avoid several security breaches.

# Thunder Client Collection:
<<<<<<< HEAD

- I have used Thunder Client as API Testing Tool in Development Environment.
- Thunder Client is a extension available in VsCode Editor for API Testing.

# For API TESTING:

- Import 'thunder-collection_order-management.json' file.

# Time Spent To Complete The Task:
=======
-  I have used Thunder Client as API Testing Tool in Development Environment.
- Thunder Client is a extension available in VsCode Editor for API Testing.

# API TESTING:
- I have imported 'thunder-collection_order-management.json' file in API Testing Folder. You can refer this file for Api testing purpose.

# Task Completion Time:
- I have included almost all the requirements mentioned. It took 3.5 hours to implement all features including testing.
>>>>>>> 372dd188999ecd9a4066b664adbb04553b1efd7f

- I have included almost all the requirements mentioned. It took 3.5 hours to implement all features including testing.
