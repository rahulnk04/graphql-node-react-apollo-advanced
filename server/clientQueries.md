---------------------------
query getAllUsers{
  users{
    id
    firstName
    lastName
    email
  }
}
---------------------------
query getUserById{
  user(id:"23131"){
    id
    firstName
    lastName
    email
  }
}
-----------------------------
query getAllQuotes{
  quotes{
    name
    by  
  }
}
-----------------------------
query getQuotebyUser{
  iquote(by:"4232"){
    name
    by
  }
}




query getAllUsers{
  users{
    id
    firstName
    lastName
    email
    quotes{
      name
      by  
    }
  }
}




----------------------
query getUserById($userid:ID!){
  user(id:$userid){
    id
    firstName
    lastName
    email
  }
}

-----------------------------
query getAllQuotes{
  quotes{
@@ -29,4 +38,11 @@ query getQuotebyUser{
    name
    by
  }
}
-----------------
query getQuoteByUser($quoteby:ID!){
  iquote(by:$quoteby){
    name
    by
  }
}





__________________________________

mutation createUser($userNew:UserInput!){
  user:signupUserDummy(userNew:$userNew){ 
    id
    email
    firstName
    lastName
  }
}

query variable
{
  "userNew": {
    "firstName": "navin",
    "lastName": "ssd",
    "email": "sdsad@sd.com",
    "password": "12345"
  }
}