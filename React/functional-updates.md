# Functional Updates

It has been almost two years since the Hooks released. We have already forgotten about the `Classes`, the `this` keyword and those lifecycle methods.

However, I see a lot of people forgetting about Functional Updates. It still important for the Hooks!  
_"If your state update depends on its own value, we must pass a function ..."_, this same rule from the old `setState()` is still valid. Look:

```jsx
function Counter() {
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    const id = setInterval(_=> setCount(count + 1), 1000)
    return () => clearInterval(id)
  }, [])

  return <samp>{count}</samp>
}
```

We could add `count` to the `useEffect()`'s dependence list, it seems to work... But we are declaring and executing a new `setInterval` every second, running the `useEffect` on every render. With the hard-coded `setCount(1)`, `setCount(2)`, `setCount(3)`, ...

So don't forget about the **Functional Updates**:

```jsx
function Counter() {
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    const id = setInterval(_=> setCount((count) => count + 1), 1000)
    return () => clearInterval(id)
  }, [])

  return <samp>{count}</samp>
}
```

Another **bad** example:

```jsx
function BrokenGun() {
  const [shot, setShot] = React.useState(0)
  const failedTripleShot = () => {
    setShot(shot + 1)
    setShot(shot + 1)
    setShot(shot + 1)
  }
  return console.log(shot) ||
    <button onClick={failedTripleShot}>Burst Fire</button>
}
```

> **(pt-BR)** Já faz quase dois anos que os Hooks chegaram. Já esquecemos das `Classes`, do `this` e dos métodos do lifecycle.
>
> Porém vejo muita gente se esquecendo sobre as Atualizações Funcionais. Isso ainda vale para os Hooks!
> _"Se a atualização do seu state depende do seu próprio valor, devemos passar uma função..."_, esta mesma regra do antigo `setState()` continua valendo. Veja:
>
> ```jsx
> function Contador() {
>   const [contagem, setContagem] = React.useState(0)
>
>   React.useEffect(() => {
>     const id = setInterval(_=> setContagem(contagem + 1), 1000)
>     return () => clearInterval(id)
>   }, [])
>
>   return <samp>{contagem}</samp>
> }
> ```
>
> Poderíamos colocar `count` na lista de dependências do `useEffect()`, parece que funciona... Mas aí estamos declarando e executando um novo `setInterval` a cada segundo. E com o valor **chumbado** no `setContagem(1)`, `setContagem(2)`, `setContagem(3)`, ...
>
> Portanto, não se esqueça das **Atualizações Funcionais**:
> ```jsx
> function Contador() {
>   const [contagem, setContagem] = React.useState(0)
>
>   React.useEffect(() => {
>     const id = setInterval(_=> setContagem((contagem) => contagem + 1), 1000)
>     return () => clearInterval(id)
>   }, [])
>
>   return <samp>{contagem}</samp>
> }
> ```
>
> Outro **péssimo** examplo:
>
> ```jsx
> function ArmaQuebrada() {
>   const [disparo, setDisparo] = React.useState(0)
>   const tiroTriploFalho = () => {
>     setDisparo(disparo + 1)
>     setDisparo(disparo + 1)
>     setDisparo(disparo + 1)
>   }
>   return console.log(disparo) ||
>     <button onClick={tiroTriploFalho}>Rajada de Tiros</button>
> }
> ```
