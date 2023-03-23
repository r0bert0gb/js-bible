# Execução Assíncrona e eventos(fila de)

JS é síncrono (*single-thread*). Por padrão, não executa nada antes
do código anterior terminar.

Enquando houver algo na pilha de **contextos de execução global**, eventos ficam *esperando*. Esperando por estarem na *Fila de eventos*.

Eventos só podem ser processados quando a pilha de contextos de execução estiver vazia (contexto de execução global e de função).

```html
	<button onclick="console.log('O botão foi clicado');">
		Me clique!!
	</button>

	<!--* O botão só vai printar depois do loop no JS terminar! -->
	<script src="./12m-eventos_e_fila-de-eventos.js"></script>
```
