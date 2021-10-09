import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/components/home/home.component';
import { ProdutoDeleteComponent } from './views/components/produto/produto-delete/produto-delete.component';
import { ProdutoUpdateComponent } from './views/components/produto/produto-update/produto-update.component';
import { ProdutosCadastroComponent } from './views/components/produto/produtos-cadastro/produtos-cadastro.component';
import { ProdutosListagemComponent } from './views/components/produto/produtos-listagem/produtos-listagem.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'produtos',
    component: ProdutosListagemComponent
  },
  {
    path: 'produtos/cadastro',
    component: ProdutosCadastroComponent
  },
  {
    path: 'produtos/update/:id',
    component: ProdutoUpdateComponent
  },
  {
    path: 'produtos/delete/:id',
    component: ProdutoDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
