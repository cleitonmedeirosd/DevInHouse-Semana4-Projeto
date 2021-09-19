
window.addEventListener("load", inicia);
    
    function inicia() {

        document.getElementById("btnAdicionar").addEventListener("click", function () {            

            //Elementos para variaveis
            var btnAdicionar = document.getElementById("btnAdicionar");
            var lista = document.getElementById("lista"); 
            var texto = document.getElementById("textoDigitado").value;
            
            if (texto == ''){
                alert('Informe uma tarefa!');
                return;
            }

            //Cria elementos
            var liInput = document.createElement("input");
            var liBtn = document.createElement("button");
            var liSpan = document.createElement("span")
            var divBloco = document.createElement("div")

            //Alimenta elementos
            liBtn.textContent = 'Excluir';
            liSpan.textContent = texto;
            liBtn.id = 'liBtn';            
            liInput.id = 'liCheckbox';
            liInput.type = 'checkbox';
            liInput.classList.add('contaChecked')
            liSpan.classList.add('sublinha');
            divBloco.classList.add('divBloco')            

            //Adiciona a pagina
            lista.appendChild(divBloco);
            divBloco.appendChild(liInput);
            divBloco.appendChild(liSpan);
            divBloco.appendChild(liBtn);   

            
            //Chama para salvar no local
            salvarLi()   
            
            //Método para excluir texto          
            liBtn.addEventListener('click', function(event){
                divBloco.remove();
                localStorage.clear()
                salvarLi()

            })

        });

        //Salvar
        function salvarLi(){
        var listaTarefas = []
        var valores = document.querySelectorAll('#lista'); 
        if (!valores){
            return;
        }else{
            for(let tarefa of valores){
                listaTarefas.push(tarefa.innerHTML);
            }
            localStorage.setItem('Listateste', JSON.stringify(listaTarefas));

            }               
            
        }
        //Carregar
        function load(){
            var todaLista = localStorage.getItem('Listateste')
            if (!todaLista){
               return;
            }else{                   
                var lista2 = JSON.parse(todaLista)
                document.getElementById('lista').innerHTML = lista2
                
            }
        
        }
    load();  

    };
    
    
