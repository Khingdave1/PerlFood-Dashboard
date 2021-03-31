import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Vendors } from '../../../interfaces/vendor';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { VendorService } from 'src/app/services/vendor.service';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/interfaces/category';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})

export class AddproductComponent implements OnInit {

  @Output("parentData") parentData: EventEmitter<any> = new EventEmitter();

  showPreviewImage: boolean = false;
  showPreviewText: boolean = true;
  selectedFile: File;
  previewImage: any;
  loading = false;
  successMessage: boolean = false;
  toppings: [] = [];
  totalLikes = 0;
  totalSales = 0;
  categories: any;
  vendors: any;

  constructor(private productService: ProductService, private http: HttpClient, private formBuilder: FormBuilder, private vendorService: VendorService, private categoryService: CategoryService) { }

  ngOnInit(): void {

    // Getting all Vendors from Firebase
    this.vendorService.getVendors().subscribe((v: any) => {
      this.vendors = []
      v.forEach((i: any) => {
        let item = i.payload.doc.data() as Vendors
        item.id = i.payload.doc.id
        this.vendors.push(item)
      });
    })

    // Getting all Categories from Firebase
    this.categoryService.getCategories().subscribe((c: any) => {
      this.categories = []
      c.forEach((i: any) => {
        let item = i.payload.doc.data() as Category
        item.id = i.payload.doc.id
        this.categories.push(item)
      });
    })
  }

  // Show Rider Section
  showProductSect() {
    this.parentData.emit();
  }

  // Product Form
  productForm: FormGroup = this.formBuilder.group({
    name: ['', { validators: [Validators.required], updateOn: "change" }],
    imageUrl: ['', { validators: [Validators.required], updateOn: "change" }],
    categoryId: ['', { validators: [Validators.required], updateOn: "change" }],
    amount: ['', { validators: [Validators.required], updateOn: "change" }],
    description: ['', { validators: [Validators.required], updateOn: "change" }],
    discountedAmount: ['', { validators: [Validators.required], updateOn: "change" }],
    vendorId: ['', { validators: [Validators.required], updateOn: "change" }]
  });

  // File Selected
  onFileSelected(event: any) {
    this.selectedFile = <File>event.target.files[0]

    // Preview File Selected
    if (this.selectedFile) {
      let reader = new FileReader();
      reader.readAsDataURL(this.selectedFile)
      reader.onload = (e: any) => {
        this.previewImage = e.target.result
        if (this.previewImage !== "") {
          this.showPreviewImage = true
          this.showPreviewText = false
        } else {
          this.showPreviewImage = false
          this.showPreviewText = true
        }
      }
    }
  }

  // Upload Image to Cloudinary Then Submit form to Firebase
  onUpload() {
    this.loading = true
    const formData = new FormData();
    formData.append('file', this.selectedFile, this.selectedFile.name);
    formData.append('upload_preset', 'perlfood_images');
    formData.append('upload_name', environment.cloudinaryName);

    this.http.post('http://api.cloudinary.com/v1_1/djnqxvljr/image/upload', formData).subscribe((d: any) => {
      let imageUrl = d.url;
      let data = {
        imageUrl: imageUrl,
        name: this.productForm.value.name,
        amount: this.productForm.value.amount,
        categoryId: this.productForm.value.categoryId,
        description: this.productForm.value.description,
        discountedAmount: this.productForm.value.discountedAmount,
        toppings: this.toppings,
        totalLikes: this.totalLikes,
        totalSales: this.totalSales,
        vendorId: this.productForm.value.vendorId
      }
      // post
      this.productService.addProduct(data).then(res => {
        this.loading = false
        this.successMessage = true

        // Return to the Products page
        window.location.reload()
      }).catch(err => {
        console.log(err)
      })
    })
  }

}
