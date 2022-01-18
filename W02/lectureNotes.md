# 1/12/2022


`boolean && function();` = `if (boolean) { function(); }`

binary version of ternary operator

web page = tree

REPL: read eval print loop -> interactive language shell

## HTTPS vs SSH for Git

### HTTPS -> username + password

origin https

#### Good 

- easier to set up

- no ssh keys

- port open in all firewalls

#### Bad

- password every time you push

- if account gets stolen, you're f*cked

### SSH -> public + private key encryption

origin git

keep private key yourself, public key on github account

#### Good

- keys are more secure than passwords

- **no repetitive authentication**

- no 2FA

- if private key is compromised, your repos can still get f*cked, but not your entire account

- quick, once configured

#### Bad

- always need a github account to clone/pull

- connections sometimes refused by firewall

- initial setup and config is time-consuming



___

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

## HTTP

- send over TCP

- simple and human readable

- extensible, with the use of headers

- stateless, but not sessionless. cookies

application layer: abstraction layer that specifies shared communication protocols in a communications network

### HTTP Flow

1. open TCP connection, used to send and recieve
1. send HTTP message


        GET / HTTP/1.1
        Host: developer.mozilla.org
        Accept-Language: fr

    - `GET` -> method = operation to perform
    - ` / ` -> path
    - ` HTTP/1.1` -> version of the protocol
    - `Host...Accept-Language: fr` -> headers = additional information
    - body -> contain resource sent

1. read response from server

        HTTP/1.1 200 OK
        Date: Sat, 09 Oct 2010 14:28:02 GMT
        Server: Apache
        Last-Modified: Tue, 01 Dec 2009 20:18:22 GMT
        ETag: "51142bc1-7449-479b075b2891b"
        Accept-Ranges: bytes
        Content-Length: 29769
        Content-Type: text/html

        <!DOCTYPE html... (here come the 29769 bytes of the requested web page)

    - `HTTP/1.1` -> version of the protocol
    - `200` -> status code
    - `OK` -> status message, not authoritative
    - `Date...text/html` -> headers
    - body -> fetched resource

1. close connection or reuse for future requests

### HTTP Caching

optional, but usually desirable

typically limited to GET requests

caching: stores copy of resource (in a more convenient location) and serves it back when requested

shared cache: stores responses for reuse by more than one user

private cache: dedecated to a single user

#### Types

- browser
- proxy
- gateway
- CDN
- reverse proxy
- load balancers

### HTTP Cookies

#### Used for:

- session management
- personalization
- tracking

sent with every request, so can worsen performance

tiny test.