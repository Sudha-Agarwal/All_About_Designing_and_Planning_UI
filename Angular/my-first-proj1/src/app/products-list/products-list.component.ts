import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent implements OnInit{
products:any[] = [];
filterString:string = '';
  constructor(private ds:DataService, private route:ActivatedRoute){

  }
  ngOnInit(): void {
    this.ds.getProductData().subscribe({
      next: (data:any) => this.products = data,
      error: err=>console.log(err),
      complete: ()=> console.log("complete")
    })
    
  }
  /*products = [
    {id:1, name:'Product1', description:'Description1'},
    {id:2, name:'Product2', description:'Description2'},
    {id:3, name:'Product3', description:'Description3'}
  ]*/

  data = this.ds.getData();

  


  
}
