import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NovoProtocoloComponent } from './novo-protocolo/novo-protocolo.component';
import { ProtocolosEnviadosComponent } from './protocolos-enviados/protocolos-enviados.component';
import { ProtocolosRecebidosComponent } from './protocolos-recebidos/protocolos-recebidos.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { CadastroDiretoriaComponent } from './cadastro-diretoria/cadastro-diretoria.component';
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';
import { ListarDiretoriasComponent } from './listar-diretorias/listar-diretorias.component';
import { routing } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NovoProtocoloComponent,
    ProtocolosEnviadosComponent,
    ProtocolosRecebidosComponent,
    CadastroUsuarioComponent,
    CadastroDiretoriaComponent,
    ListarUsuariosComponent,
    ListarDiretoriasComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
