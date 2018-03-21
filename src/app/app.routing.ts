import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CadastroDiretoriaComponent } from './cadastro-diretoria/cadastro-diretoria.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { ListarDiretoriasComponent } from './listar-diretorias/listar-diretorias.component';
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';
import { NovoProtocoloComponent } from './novo-protocolo/novo-protocolo.component';
import { ProtocolosEnviadosComponent } from './protocolos-enviados/protocolos-enviados.component';
import { ProtocolosRecebidosComponent } from './protocolos-recebidos/protocolos-recebidos.component';

const APP_ROUTES: Routes = [
    { path: '', component: LoginComponent }
    { path: 'home', component: HomeComponent }
    { path: 'cadastro-diretoria', component: CadastroDiretoriaComponent }
    { path: 'cadastro-usuario', component: CadastroUsuarioComponent }
    { path: 'listar-diretorias', component: ListarDiretoriasComponent }
    { path: 'listar-usuarios', component: ListarUsuariosComponent }
    { path: 'novo-protocolo', component: NovoProtocoloComponent }
    { path: 'protocolos-enviados', component: ProtocolosEnviadosComponent }
    { path: 'protocolos-recebidos', component: ProtocolosRecebidosComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);