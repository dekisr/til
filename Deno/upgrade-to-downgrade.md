# Upgrade to Downgrade
When starting my first study projects with Deno, I came across some issues... Our 🦕 is growing and with each update, our dependencies on third party modules may be left behind. Therefore, some older projects may not run on newer versions of the Deno. 

It's annoying to send your project to someone who has another version of Deno, and your project breaks. But it is even more annoying to wait for your dependencies to be updated. It is even worse if you try to update everything manually. 

In those cases, I think the easier way is to **downgrade** the Deno to an earlier version. And for that, you do an **upgrade**...  
Indicating the desired version:
```zsh
$ deno upgrade --version 1.1.3
```

>**(pt-BR)**
>Ao iniciar os meus primeiros projetos de estudo com Deno, me deparei com alguns problemas... O Deno está crescendo e a cada atualização, suas dependências de terceiros podem ficar para trás. Portanto, alguns projetos antigos podem não rodar em versões mais novas do Deno.
>
>É chato você mandar seu projeto para alguém que está com outra versão do Deno e o seu projeto quebrar. Mas é muito mais chato ter que esperar que suas dependências sejam atualizadas. E ainda pior se tentar atualizar tudo manualmente.
>
>Nesses casos acho que a maneira mais simples é dar um **downgrade** do Deno para uma versão anterior. E para isso você faz um **upgrade**...  
>Indicando a versão desejada:
> ```zsh
> $ deno upgrade --version 1.1.3
> ```