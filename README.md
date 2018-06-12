
<div align="center"><strong>An offline-first, responsive Task Manager Application</strong></div>
<div align="center">This application uses React, Redux, Styled Components, ImmutableJS and other cool tech. </div>

<br />

## Features

<dl>
  <dt>Predictable state management using Redux</dt>
  <dd>Unidirectional data flow allows for change logging and time travel debugging.</dd>

  <dt>Responsive Design</dt>
  <dd>Mobile first layout, without using any UI Framework</dd>

  <dt>Next generation JavaScript (ES6, 7)</dt>
  <dd>Template strings, object destructuring, arrow functions, JSX syntax and more.</dd>

  <dt>Next generation CSS</dt>
  <dd>Styled Components, Modular CSS</dd>

  <dt>Industry-standard routing</dt>
  <dd>Routing using React Router</dd>


  <dt>Offline-first</dt>
  <dd>Production builds are offline first, and therefore optimized for low or no network conditions</dd>

  <dt>SEO</dt>
  <dd>SEO (document head tags management) for search engines that support indexing of JavaScript content. (eg. Google)</dd>
</dl>

## Quick start

1. Clone this repo
2. `cd` into the directory and run `yarn` or `npm install`
3. Run `yarn start` or `npm start`
4. To see test coverage, run `npm test`

## State Structure

 ```
tasks: [
  {
    id: 'fccfe817-418e-48f3-9402-c447a8376a94',
    title: 'Create Project Structure',
    edit: false,
    status: 'active'
  },
  {
    id: '74154ff3-610d-4a90-b1a1-a95e5dc075e2',
    title: 'Add styles',
    edit: false,
    status: 'active'
  }
],
currentTask: {
  id: 'c575bff6-4d9a-4fa0-bfa1-c3de7fc64827',
  title: null,
  status: 'active',
  edit: false
}
```


## Wishlist

1. Move UUID creation from reducer to Action creator to ensure purity of reducer function
2. Implement Demo Flow
3. Do basic cross browser testing
4. 
