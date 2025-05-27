import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contato',
  imports: [FormsModule],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.scss'
})
export class ContatoComponent {
  public mensagem: string = "";
  public empresa: string = "";
  public email: string = "";
  public telefone: string = "";
  public nome: string = "";

  public enviarEmail(): void {
    const empresa = this.empresa.trim() || 'Empresa não informada';
    const assunto = encodeURIComponent(`Solicitação de Orçamento - ${this.nome} - ${empresa} - ${this.telefone}`);
    const corpo = encodeURIComponent(this.mensagem);
    const emailDestino = 'contato@helpyservice.com.br';

    let mailtoLink = `mailto:${emailDestino}?subject=${assunto}&body=${corpo}`;

    if (this.email.trim()) {
      mailtoLink += `&cc=${encodeURIComponent(this.email.trim())}`;
    }

    window.location.href = mailtoLink;
    this.limparForm();
  }

  public limparForm(): void {
    this.mensagem = "";
    this.empresa = "";
    this.telefone = "";
    this.email = "";
    this.nome = "";
  }
}
