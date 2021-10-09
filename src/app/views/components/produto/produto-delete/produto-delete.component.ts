import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/models/produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produto-delete',
  templateUrl: './produto-delete.component.html',
  styleUrls: ['./produto-delete.component.css']
})
export class ProdutoDeleteComponent implements OnInit {

  id_prod = ''

  produtos: Produto = {
    id: '',
    produto: '',
    quantidade: 0,
    valor: 'R$ '
  }

  constructor( 
    private router: Router,
    private service: ProdutoService,
    private route: ActivatedRoute,
    private dialog: MatDialog
    
  ) { }


  ngOnInit(): void {
    this.id_prod = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }

  findById(): void {
    this.service.findById(this.id_prod).subscribe(resposta => {
      this.produtos = resposta;
    })
  }

  delete(): void {
    this.service.delete(this.id_prod).subscribe(resposta => {
      this.router.navigate(['produtos'])
      this.service.message('Produto Deletado com Sucesso!')
    })
  }

  cancel(): void {
    this.router.navigate(['produtos'])
  }


}