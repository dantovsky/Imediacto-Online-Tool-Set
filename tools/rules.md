# Diretrizes de Desenvolvimento de Ferramentas (rules.md)

Este documento define o padrão arquitetural, visual e de código para a criação de novas ferramentas integradas neste ecossistema de online tools. Todas as IAs devem seguir estas regras estritamente.

## 1. Tecnologias

- JavaScript
- HTML
- CSS

## 2. Arquitetura de Ficheiros e Estrutura do Código
Cada ferramenta fica dentro de uma pasta própria nomeada com o padrão `0XX-nome-da-ferramenta/`. O ficheiro principal deve ser `index.html`.
Dentro de cada pasta poderá existir um ficheiro "info.txt" com orientações sobre a ferramenta, então é um ficheiro importante caso a ferramenta ainda não tenha sido desenvolvida. Poderá consultar os sites de referência e inspiração para construir a ferramenta.

### Isolamento do Bootstrap
* O Bootstrap está totalmente isolado para não quebrar o layout global do site.
* **Regra de Ouro:** Todo o conteúdo da ferramenta (HTML, inputs, texto explicativo) deve obrigatoriamente estar envolvido por uma div principal contendo a classe `.boot` combinada com a classe específica da ferramenta. Tem ainda uma div.box-conteiner que envolve tudo (conteúdo, tool e scripts JS necessários)

### Estilhos CSS
* Utilizar sempre os estilos disponível em:
    - shared/css/boot.css 
    - shared/css/styles.css 
* Caso seja necessário, então deve ser criado o CSS específico no ficheiro HTML da ferramenta.

### Resultado final da aplicação

Ao final, toda aplicação deve estar em um único ficheiro HTML. A única exceção é a necessidade de buscar funções compartilhadas em "../shared/js/scripts.js" ou até mesmo adicionar novas funções nessa pasta compartilhada para uso futuro.

```html
<!-- Exemplo de Estrutura Inicial Obrigatória -->
<div class="box-container">
    <div class="boot rem-to-px-converter">
        <!-- Todo o HTML da ferramenta e textos explicativos entram aqui -->
    </div>
    <script>
        // Custom JavaScript here...
    </script>
    <script src="../shared/js/scripts.js"></script>
</div>
```

## 3. Conteúdo e SEO

Na página de cada ferramenta deve ser insiro algun conteúdo útil e informativo, utilizando palavras chave para otimizar o ranking e reconhecimento da página pelos mecaniscmos de busca.

Ao início pode ser colocada uma frase curta explicativa sobre o que é e para que serve a ferramenta. Logo após a ferramenta deve ser colocado mais conteúdo relacionado, com o objetivo principal de Otimização SEO.

### Conteúdo final

Ao final da página, finaliza-se com uma mensagem do autor e dono do site. Nesta frase deverá ser mencionada a ferramenta e possivelmente mais alguns termos relacionados. Por exemplo, aqui está o conteúdo que foi interido na ferramenta "REM to PX Converter", ao final da página:
```html
<div class="notes">
    <div class="image"></div>
    <div class="message">
        <p>
            Send me your feedback about this <strong>REM to PX converter</strong> and let me know if you have some
            specific need, then I can implement this new feature and improve this online tool. Also, let me know if
            you have some need about other different <strong>CSS tool</strong> or <strong>coding tool set</strong>.
        </p>
        <p>
            You can learn about how this online tool works or contribute improving the REM to PX Converter by
            programming some new feature or fixing bugs. For that, go to Github on <a
                href="https://github.com/dantovsky/Imediacto-Online-Tool-Set">Imediacto-Online-Tool-Set
                repository</a>. Any contribution is welcome and very appreciated. Thank you!
        </p>
    </div>
</div>
```
Então, adapte o conteúdo do elemento ".message" para otimizar o conteúdo textual e finalizar cada ferramenta.