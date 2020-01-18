## jsx
- looks like `html`
### React Code
```js
return React.createElement('h1', {title: 'This works!'}, 'Hi, this is React!');
```
### jsx
```js
return <h1 title="This works!">Hi, this is React!</h1>;
```

## components
- Reuseable
### regualer
```js
class App extends React.Component {
  render () {
    return <h1 title="This works!">Hi, <span>this</span> is React!</h1>;
  }
}
```
### morden react
- just function base component
```js
const App = () => {
  return <h1 title="This works!">Hi, <span>this</span> is React!</h1>;
};
```

## import 이용 css 추가 가능
jsx is not html but like html looking syntex `className`
> js
```js
<ul className=''>
```
> to html
```html
<ul class=''>
```
