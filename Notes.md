# Class Notes

## Basic Developer Tools

read: 4

write: 2

execute: 1

4 + 2 + 1 = 7

user, all users, general group


#### command 1 | command 2

output from command 1 -> input to command 2

env | grep PATH -> display path variable


## Understanding the Web

OSI: Open Systems Interconnection (model) -> how computers interact

DNS: Domain Name System -> IP address to web url

port -> more specific way to connect

### HTTP

client requests and server responds

#### Requests

Method: Get, Post, Put, Delete

Resource: '/users', 'api/cart',  etc -> where to route request

Headers: key-value pairs containing request info

Body: data to transmit to server, may be empty

#### Responses

Status code: what happened on the server

Headers

Body


HTML -> tree

DOM: Document Object Model

Tree represents web page

JavaScript -> change DOM

JSON = dictionary (key-value pairs)


stylesheets in head -> they get loaded before body (so site doesn't flash plain HTML)

scripts can be in head, or at end of body (faster loading)

faster to have one big scripts file than many smaller ones

same with css

minimize to make them even faster

JS can also make requests

[Get vs Post Methods](https://www.w3schools.com/tags/ref_httpmethods.asp)

[Semantic Elements](https://www.w3schools.com/html/html5_semantic_elements.asp)

## Words

Protocol: a set of rules that defines a format. It is a system of rules that define how data is exchanged within or between computers. Communications require agreement on the format of the data that is being exchanged

Caching: a technique that stores a copy of a given resource and serves it back when requested. When a web cache has a requested resource in its store, it intercepts the request and returns a copy of the stored resource instead of re-downloading the resource from the originating server

AJAX (Asynchronous JavaScript and XML): allows you to update parts of the DOM without the need for a full page refresh. Ajax also lets you work asynchronously, meaning your code continues to run while the targeted part of your web page is trying to reload (compared to synchronously, which blocks your code from running until that part of your page is done reloading). Ajax is gradually being replaced by the official Fetch API Standard


HTTP = stateless: there is no link between two requests being successively carried out on the same connection

HTTP Cookies are added to the workflow, allowing session creation on each HTTP request to share the same context, or the same state: shopping cart or basket
