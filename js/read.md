1. API - API is the acronym for Application Programming Interface, which is a software intermediary that allows two applications to talk to each other.

ধরা যাক আমরা একটা রেস্টুরেন্টে খাবার মেনু থেকে কিছু খাবার অর্ডার করলাম। খাবার অর্ডারের পর ওয়েটারের অর্ডারকৃত খাবার আমাদের টেবিলে নিয়ে আসলো। এ পি আই কিছুটা তেমনই ভাবে কাজ করে।

----------------------------------------------
2.  Javascript Object Notation -- JSON

জাভাস্ক্রিপ্টে যখন আমরা কোনো একটা ডাটা সার্ভার থেকে অর্ডার দেই সেটা অব্জেক্ট হিসেবেই আসে।

We have to convert the object into string using 
(JSON.stringify) to load the data from the server

Actually the data loaded from the server or backend is always a string. We will convert the data using (JSON.paarse) in case of use and the stringified data will convert into object. Moreover, We cant have access from a stringified object. So we have to convert this to object using (JSON.parse). 
*******************************************
To understand more, have a look to the below code


const shop = {
    name: 'Ladies First',
    address: 'School Road',
    profit: 15000,
    products: ['laptop', 'Mobile', 'pepsi'],
    owner: {
        name: 'Subrata Shuvo',
        profession: 'Junior web dev'
    },
    isExpensive: false
};
const shopStringified = JSON.stringify(shop);
console.log(shopStringified);
const converted = JSON.parse(shopStringified);
console.log(converted)

console.log(converted.owner) --  we can see a specific object property ujsut like this.


-----------------------------------------------------

3. JSON PLACEHOLDER 
https://jsonplaceholder.typicode.com/ from this website we will copy the code written there

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))


  If we write a function outside of the function the data inside the function will automatcally load


  ------------------------------------------------
For interview:

1. HTTP Methods GET vs POST - W3Schools (https://www.w3schools.com/tags/ref_httpmethods.asp)

2. HTTP response status codes (https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

3. Create, read, update and delete (https://en.wikipedia.org/wiki/Create,_read,_update_and_delete)
