import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Produto } from 'src/app/models/produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produtos-cadastro',
  templateUrl: './produtos-cadastro.component.html',
  styleUrls: ['./produtos-cadastro.component.css']
})
export class ProdutosCadastroComponent implements OnInit {

  produtos: Produto = {
    id: '',
    produto: '',
    quantidade: 0,
    valor: 'R$ '
  }

  produto = new FormControl('', [Validators.minLength(5)])
  quantidade = new FormControl('', [Validators.minLength(2)])
  valor = new FormControl('', [Validators.minLength(5)])

  constructor(
    private router: Router,
    private _snackBar: MatSnackBar,
    private service: ProdutoService
  ) { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.router.navigate(['produtos'])
  }

  create(): void {
    this.service.create(this.produtos).subscribe((resposta) => {
      this.router.navigate(['produtos'])
      this.service.message('Produto Cadastrado com Sucesso!s')
    })
  }

  errorValidName(){
    if (this.produto.invalid) {
      return 'O nome do produto deve ter entre 5 ou 100 caracteres!';
    }
    return false;
  }

  errorValidQuantida(){
    if (this.quantidade.invalid) {
      return 'A quantidade do produto deve ter entre 2 ou 5 caracteres!';
    }
    return false;
  }

  errorValidValor(){
    if (this.valor.invalid) {
      return 'O Valor do Produto deve ter entre 5 ou 11';
    }
    return false;
  }

}
