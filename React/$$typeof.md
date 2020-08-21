# \$\$typeof Property (Symbol || 0xeac7)

### Error: Objects are not valid as a React child (found: object with keys...

The chances are high, that you already got this error message. Either trying to build a High Order Component or using the old Render Props technique.

Well, we can't render an **object**, we should render a React Element. But what is a React Element? An **object**.

If we try to simulate an object like this:

```javascript
ReactDOM.render(
  {
    type: 'h1',
    props: { children: 'Hi' },
    key: null,
    ref: null,
  },
  document.getElementById('root')
)
```

Does not work either. Something is missing:

```javascript
ReactDOM.render(
  {
    type: 'h1',
    props: { children: 'Hi' },
    key: null,
    ref: null,
    $$typeof: Symbol.for('react.element'),
  },
  document.getElementById('root')
)
```

Now your're talking! But this property is not just an identifier. It is also used for security concerns, with the help of the [Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol) primitive.

Knowledge acquired through our prophet _Dan Abramov_, also read:  
https://overreacted.io/why-do-react-elements-have-typeof-property

> ### Error: Objects are not valid as a React child (found: object with keys...
>
> **(pt-BR)** Talvez você já tenha se deparado com esta mensagem de erro, seja se aventurando em um High Order Component ou utilizando a antiga técnica Render Props.
>
> Bom, não podemos renderizar um **objeto** e sim um Elemento React. Mas o que é um Elemento React? Um **objeto**.
>
> Se tentarmos simular um objeto assim:
>
> ```javascript
> ReactDOM.render(
>   {
>     type: 'h1',
>     props: { children: 'Olá' },
>     key: null,
>     ref: null,
>   },
>   document.getElementById('root')
> )
> ```
>
> Também não vai rolar. Falta alguma coisa:
>
> ```javascript
> ReactDOM.render(
>   {
>     type: 'h1',
>     props: { children: 'Olá' },
>     key: null,
>     ref: null,
>     $$typeof: Symbol.for('react.element'),
>   },
>   document.getElementById('root')
> )
> ```
>
> Agora sim! Mas esta propriedade não serve apenas como um identificador. Ela é usada também para medidas de segurança, com a ajuda do primitivo [Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol).
>
> Conhecimento adquirido através nosso profeta _Dan Abramov_, leia também:  
> https://overreacted.io/why-do-react-elements-have-typeof-property
