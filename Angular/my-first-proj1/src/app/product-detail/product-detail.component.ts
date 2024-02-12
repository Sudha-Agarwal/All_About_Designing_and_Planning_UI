import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  constructor(private route:ActivatedRoute, private router:Router){}

  id = this.route.snapshot.paramMap.get("id");

  navigateToProducts(){
    this.router.navigate(['/products']);

  }

}
