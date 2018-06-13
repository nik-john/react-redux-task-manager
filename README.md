![](https://lh3.googleusercontent.com/WvQr81Rc6-O5nS5rNlTIrNNWnQjDeeXdyJktMp0pAfk8ZmrWkCF2jQ0DOh6kvyGHLXiNnj_v27tADziYRYFcsfi-LL2_Da0Wj9ntsqmkxAPj0iIUK7OCIKf4Aspa2pybxvCUIgLRYn14Ael1CfH8Tf-3io5Jgn0mO8dK6CSkvOxl4dMteuYfIqB61s4-gnHjHRosYwZJ2dw5JQMUGeV1JZuBDEf3sq6dYCUb9G7nZmufQcfz8lRcmQx3GAuTPK61EwInaBufjdgADgEKR-a4sYFRIBHv5tzRrhJDin0AscQ3RIYzJ_VpDqs8hW-j3KK6xsLtbpY7JCysYawSGjSd7CZT2YVGv_HhE57dCTZUvVMXG6QKaFazzzzxuPVrBQIRdlEoRkyWXzTsyiTePQOtH5lOE97u4pKUeZiwlkCStWkh85tsCny1m72Ze38C3ju77SiE41HkCxnuXHC5Mupvvpz4V4jH0bBFAyyZBSRfbBcuy0xxWEjy6LJD8_DGWwk5my6LKZe5j7aCH-F3-RsoZY862O4ZbNEd2LEJQSvecHgVFKkOu0dvps0SfBKEZj6U=w2268-h1560)


<br />
<div align="center"><strong>An offline-first, responsive Task Manager Application</strong></div>
<div align="center">This application uses React, Redux, Styled Components, ImmutableJS and other cool tech. </div>

<br />

![](https://lh3.google.com/u/0/d/1SOa0WTdXWSh0MILP9x_w7-2mKPmf6IF8=w2880-h1560-iv1)

## Features

<dl>
  <dt>Predictable state management using Redux</dt>
  <dd>Unidirectional data flow allows for change logging and time travel debugging.</dd>

  <dt>Responsive Design</dt>
  <dd>Mobile first layout, without using any UI Framework</dd>

  <dt>Responsive Inputs</dt>
  <dd>Input fields respond to touch/click, through a Material Design inspired implementation</dd>
  
  <dt>Progressive Web</dt>
  <dd>Progressive Web Application features through `manifest.json` - Home Icon, Full Screen Native App - like performance, Add to Home Screen alert, Splash Screen etc. on Android and other mobile devices</dd>
   
  <dt>Unit Testing</dt>
  <dd>All components tested via. Enzyme and Jest</dd>
  
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
4. Implement persistence via. LocalStorage API

## Known Issues

1. Tap event on Mobile sporadically fails/behaves weirdly
