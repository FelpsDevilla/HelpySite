import { Component, HostListener } from '@angular/core';
import { ServicosComponent } from "./servicos/servicos.component";
import { QuemSomosComponent } from "./quem-somos/quem-somos.component";
import { ContatoComponent } from "./contato/contato.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [ServicosComponent, QuemSomosComponent, ContatoComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'HelpySite';
  scrolled: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 50;
  }
}
