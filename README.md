## What is this? 

A bolt torque calculator. It has two modes: Basic and Advanced. Basic uses data from various manufactuerer bolt torque charts, whereas advanced calculates torque using T = KDF, and some calculations based on user inputted info. 

## Toolchain

Create react app, and it's various components, along with semantic-ui. (Well, react-semantic-ui anyways). 
Also, using query-strings and react-router to get query strings in the URL as an API. Not sure if anyone 
is interested in using this from another application but it's nice to provide that anyway.  

## Why? 

My cousin thought it might be useful and I needed some projects to throw on my portfolio. Also, it's been
good as a learning experience / practice experience after going through various JS / React / dev courses. 

## How does it work? 

Basically, it stores user inputted dropdown / integers in a react context api store, and either calculates (advanced) 
or accesses a large object (basic) to get the correct torque for your entered variables. 

## To Do

* Additional ISO bolt sizes, need to find more data for proofLoad and what not. 
* Additional standards (ASTM? Others?) may be integrated in the future. 
* Code clean up. 

That's pretty much it for the app. Maybe I'll slap it on it's own domain and add an ad or something, 
but we'll see. 