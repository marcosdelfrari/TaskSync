import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-tarefas',
  templateUrl: './lista-tarefas.component.html',
  styleUrls: ['./lista-tarefas.component.scss']
})
export class ListaTarefasComponent {
  tarefas: any[] = [
    { id: 1, nome: 'Tarefa 1', concluida: false },
    { id: 2, nome: 'Tarefa 2', concluida: true },
    { id: 3, nome: 'Tarefa 3', concluida: false }
  ];

  novaTarefa: string = '';
  tarefaEmEdicao: any = null;

  adicionarTarefa() {
    if (this.novaTarefa.trim() !== '') {
      const novaTarefa = {
        id: this.tarefas.length + 1,
        nome: this.novaTarefa,
        concluida: false
      };
      this.tarefas.push(novaTarefa);
      this.novaTarefa = '';
    }
  }

  marcarConcluida(tarefa: any) {
    tarefa.concluida = true;
  }

  editarTarefa(tarefa: any) {
    this.tarefaEmEdicao = tarefa;
  }

  salvarEdicaoTarefa() {
    this.tarefaEmEdicao = null;
  }

  excluirTarefa(tarefa: any) {
    const index = this.tarefas.indexOf(tarefa);
    if (index !== -1) {
      this.tarefas.splice(index, 1);
    }
  }
}
