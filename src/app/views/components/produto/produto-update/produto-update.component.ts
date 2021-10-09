import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/models/produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produto-update',
  templateUrl: './produto-update.component.html',
  styleUrls: ['./produto-update.component.css']
})
export class ProdutoUpdateComponent implements OnInit {

  id_prod = ''

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
    private service: ProdutoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id_prod = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }

  update(): void {
    this.service.update(this.produtos).subscribe((resposta =>{
      this.router.navigate(['produtos'])
      this.service.message('Produto Atualizado com Sucesso!!')
    }))
  }

  findById(): void {
    this.service.findById(this.id_prod).subscribe(resposta => {
      this.produtos = resposta;
    })
  }

  cancel(): void {
    this.router.navigate(['produtos'])
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
