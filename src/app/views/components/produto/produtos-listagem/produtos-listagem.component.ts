import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Produto } from 'src/app/models/produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produtos-listagem',
  templateUrl: './produtos-listagem.component.html',
  styleUrls: ['./produtos-listagem.component.css']
})
export class ProdutosListagemComponent implements AfterViewInit {

  produtos : Produto[] = [];  

  displayedColumns: string[] = ['id', 'produto', 'quantidade', 'valor', 'action'];
  dataSource = new MatTableDataSource<Produto>(this.produtos);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private service : ProdutoService,
    private router : Router
  ){}

  ngAfterViewInit() {
    this.findAll();
  }

  findAll(): void{
    this.service.findAll().subscribe((resposta) => {
      this.produtos = resposta;
      this.dataSource = new MatTableDataSource<Produto>(this.produtos);
      this.dataSource.paginator = this.paginator;
    })
  }
  
  navigateToCreate(): void{
    this.router.navigate(['produtos/cadastro'])
  }

  
}

