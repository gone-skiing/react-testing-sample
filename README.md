This repo contains examples of testing react application with react-testing-library and enzyme. It serves as a reference point and can be used as a sandbox 
to try out different use cases.

### Background

[Revisiting react testing in 2019](https://codeburst.io/revisiting-react-testing-in-2019-ee72bb5346f4)

Testing React applications is complicated and there are lot of opinions on how it should be done. Examples in this repo are heavily influenced by JavaScript / React testing 
evangelist: Kent Dodds. The gist of his ideas can be summarized through a number of quotes.

> [Write tests. Not too many. Mostly integration.](https://blog.kentcdodds.com/write-tests-not-too-many-mostly-integration-5e8c7fff591c)
>
>[The more your tests resemble the way your software is used, the more confidence they can give you.](https://github.com/kentcdodds/react-testing-library)
>
>The reason this kind of test fails those considerations is because it’s testing irrelevant implementation details. The user does not care one bit what things are called.
>[Why I Never Use Shallow Rendering.](https://blog.kentcdodds.com/why-i-never-use-shallow-rendering-c08851a68bb7)
>
> — Kent Dodds 

###Unit level examples 
Repo also includes a number of unit level examples that illustrate pieces required to put together complete integration tests. 
* Fetch mocking
* Async methods
* Chai assertions
* Chai as promised
* Routing

###End to end integration tests for Comments component
* Rendering assertions
* Navigation assertions
* Form validation and submitting
* Working Redux store
* Mocking of get and post calls to remote service

[Original article that is the source of Comments List example](https://medium.com/flatiron-labs/creating-readable-tests-using-react-testing-library-2bd03c49c284)

###Enzyme vs React testing library compare with HiddenMessage tests
This code illustrates discussion in [Why I Never Use Shallow Rendering.](https://blog.kentcdodds.com/why-i-never-use-shallow-rendering-c08851a68bb7).
 
### Frameworks used

####Jest

Javascript testing framework, provides engine to execute tests.
https://jestjs.io/docs/en/getting-started

Do not manually install jest with:
`npm install --save-dev jest`. Foundation of react projects `react-scripts` has its own jest dependency.

#### Chai
Assertion library (can be used with any testing framework)
https://www.chaijs.com/

#### Chai as Promised 
Extends Chai with a fluent language for asserting facts about promises.
https://www.chaijs.com/plugins/chai-as-promised/

`npm install —save-dev chai chai-as-promised` 

####React Testing Library 
Builds on top of DOM Testing Library by adding APIs for working with React components.
https://testing-library.com/docs/react-testing-library/intro

`npm install --save-dev @testing-library/react`

Latest version suggests react-dom of 16.9, that triggers warnings around component lifecycle methods in form components.

#### Fetch mock
fetch-mock allows mocking http requests made using fetch or a library imitating its api, such as node-fetch or isomorphic-fetch.
http://www.wheresrhys.co.uk/fetch-mock/

#### Enzyme 
JavaScript Testing utility for React that makes it easier to test your React Components' output. You can also manipulate, traverse, and in some ways simulate runtime given the output.
Enzyme's API is meant to be intuitive and flexible by mimicking jQuery's API for DOM manipulation and traversal.

https://airbnb.io/enzyme/

[Enzyme cheat sheet](https://devhints.io/enzyme)

## Available Scripts
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

It also uses
* [Redux](https://redux.js.org/)
* [Bootstrap](https://getbootstrap.com/) with [React bootstrap](https://react-bootstrap.github.io)

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm test -- --coverage`

Will report test coverage for the project.


