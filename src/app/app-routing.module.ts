import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardRoutes } from './dashboard';
import { CalculadoraRoutes } from './calculadora';
import { ConversorRoutes } from './conversor';
import { TarefasRoutes } from './tarefas';
import { JogoDaVelhaRoutes } from './jogo-da-velha';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  ...DashboardRoutes,
  ...CalculadoraRoutes,
  ...ConversorRoutes,
  ...TarefasRoutes,
  ...JogoDaVelhaRoutes,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
