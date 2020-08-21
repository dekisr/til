# Optional Chaining Operator (?.)

The first things we learn with JavaScript is that your code breaks. At runtime.

A common case when trying to access a property of an object that does not exist, we take a `ReferenceError`. Or a `TypeError` when trying to access properties of the `null` and `undefined` values. We always make these mistakes, especially if the data comes from some strange API.

Until today, ternaries and [short-circuits](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Short-Circuit_Evaluation) have helped us a lot with our expressions:

```javascript
const cat = animals.mammals ? animals.mammals.cat : undefined
// or better
const cat = animals.mammals && animals.mammals.cat
```

Today, with the **optional chaining operators `?.`**:

```javascript
const cat = animals.mammals?.cat
```

It's already on **stage 4** and ready to use on newer browsers. But you can use [Babel](https://github.com/babel/babel) or the new [Rome](https://github.com/romefrontend/rome) to be sure.

And there is much more. You can use with arrays, function arguments and expressions.  
**Check**:  
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining  
https://github.com/tc39/proposal-optional-chaining

> **(pt-BR)** Uma das primeiras coisas que você aprende com JavaScript, é que o seu código quebra. Em tempo de execução. Por exemplo, alguns casos mais comuns é tomar um `ReferenceError` ao tentar acessar uma propriedade de um objeto que não existe ou um `TypeError` ao tentar acessar propriedades dos valores `null` e `undefined`. Sempre cometemos esses erros, principalmente se os dados vierem de alguma API estranha.
>
> Até hoje, os ternários e os [short-circuits](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Short-Circuit_Evaluation) nos ajudaram bastante com as nossas expressões:
>
> ```javascript
> const boi = animais.mamiferos ? animais.mamiferos.boi : undefined
> // ou melhor
> const boi = animais.mamiferos && animais.mamiferos.boi
> ```
>
> Mas agora temos uma opção ainda mais fácil com o operador `?.`:
>
> ```javascript
> const boi = animais.mamiferos?.boi
> ```
>
> Já está no estágio 4 e disponível nos browsers 2020. Para garantir, você pode usar o [Babel](https://github.com/babel/babel) ou o novo [Rome](https://github.com/romefrontend/rome).
> E dá pra fazer ainda mais coisas. Com arrays, expressões, argumentos de funções...  
> **Veja**:  
> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining  
> https://github.com/tc39/proposal-optional-chaining
