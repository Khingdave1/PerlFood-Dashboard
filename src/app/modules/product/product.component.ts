import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product';
import { ExportService } from 'src/app/services/export.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {
  products: any;
  productSect: boolean = true;
  addProductSect: boolean = false;
  editProductSect: boolean = false;
  currentProduct: any;
  name: string;
  p: number = 1;

  constructor(private productService: ProductService, private exportService: ExportService) { }

  ngOnInit(): void {
    // Getting all Products from Firebase
    this.productService.getProducts().subscribe((p: any) => {
      this.products = []
      p.forEach((i: any) => {
        let item = i.payload.doc.data() as Product
        item.id = i.payload.doc.id
        this.products.push(item)
      })
    })

  }

  // Search products
  search() {
    if (this.name != "") {
      this.products = this.products.filter((res: any) => {
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      });
    } else if (this.name == "") {
      this.ngOnInit()
    }
  }

  // Show Rider Section
  showProductSect() {
    this.addProductSect = false
    this.productSect = true
    this.editProductSect = false
  }

  // Show Add Product Section
  showAddProductSect() {
    this.addProductSect = true
    this.productSect = false
    this.editProductSect = false
  }

  // Show Edit Product Section
  showEditProductSect(product: any) {
    this.editProductSect = true
    this.addProductSect = false
    this.productSect = false

    this.currentProduct = product
  }

  // Delete Product from firebase
  onRemove(pId: any) {
    this.productService.deleteProduct(pId.id)
  }

  // Export as Excel
  exportexcel() {
    this.exportService.exportExcel(this.products, 'productsData');
  }

}

