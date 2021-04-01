import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { MerchantComponent } from 'src/app/modules/merchant/merchant.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AccountComponent } from 'src/app/modules/account/account.component';
import { CustomerComponent } from 'src/app/modules/customer/customer.component';
import { OrderComponent } from 'src/app/modules/order/order.component';
import { ProductComponent } from 'src/app/modules/product/product.component';
import { RiderComponent } from 'src/app/modules/rider/rider.component';
import { SettingComponent } from 'src/app/modules/setting/setting.component';
import { VehicleComponent } from 'src/app/modules/vehicle/vehicle.component';
import { AddproductComponent } from 'src/app/modules/product/addproduct/addproduct.component';
import { EditproductComponent } from 'src/app/modules/product/editproduct/editproduct.component';
import { AddmerchantComponent } from 'src/app/modules/merchant/addmerchant/addmerchant.component';
import { EditmerchantComponent } from 'src/app/modules/merchant/editmerchant/editmerchant.component';
import { AddriderComponent } from 'src/app/modules/rider/addrider/addrider.component';
import { EditriderComponent } from 'src/app/modules/rider/editrider/editrider.component';
import { EachriderComponent } from 'src/app/modules/rider/eachrider/eachrider.component';
import { PaymentComponent } from 'src/app/modules/payment/payment.component'
import { OrderafricanComponent } from 'src/app/modules/order/orderafrican/orderafrican.component';
import { OrdercontinentalComponent } from 'src/app/modules/order/ordercontinental/ordercontinental.component';
import { OrderdrinkComponent } from 'src/app/modules/order/orderdrink/orderdrink.component';
import { OrderpasteryComponent } from 'src/app/modules/order/orderpastery/orderpastery.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';

import { MatFormFieldModule } from '@angular/material/form-field';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    MerchantComponent,
    AccountComponent,
    CustomerComponent,
    OrderComponent,
    ProductComponent,
    RiderComponent,
    SettingComponent,
    VehicleComponent,
    AddproductComponent,
    EditproductComponent,
    AddmerchantComponent,
    EditmerchantComponent,
    AddriderComponent,
    EditriderComponent,
    EachriderComponent,
    PaymentComponent,
    OrderafricanComponent,
    OrdercontinentalComponent,
    OrderdrinkComponent,
    OrderpasteryComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule
    // MatAutocompleteModule,
    // MatButtonModule,
    // MatButtonToggleModule,
    // MatCardModule,
    // MatCheckboxModule,
    // MatChipsModule,
    // MatDatepickerModule,
    // MatDialogModule,
    // MatExpansionModule,
    // MatGridListModule,
    // MatIconModule,
    // MatSidenavModule,
    // MatTableModule,
    // MatTabsModule,
    // MatToolbarModule,
    // MatTooltipModule,
    // MatListModule,
    // MatPaginatorModule,
    // MatSortModule,
    // MatSnackBarModule,
    // MatStepperModule,
    // MatSlideToggleModule,
    // MatSliderModule,
    // MatMenuModule,
    // MatRadioModule,
    // MatProgressBarModule,
    // MatProgressSpinnerModule,
    // MatInputModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule
    // MatAutocompleteModule,
    // MatButtonModule,
    // MatButtonToggleModule,
    // MatCardModule,
    // MatCheckboxModule,
    // MatChipsModule,
    // MatDatepickerModule,
    // MatDialogModule,
    // MatExpansionModule,
    // MatGridListModule,
    // MatIconModule,
    // MatSidenavModule,
    // MatTableModule,
    // MatTabsModule,
    // MatToolbarModule,
    // MatTooltipModule,
    // MatListModule,
    // MatPaginatorModule,
    // MatSortModule,
    // MatSnackBarModule,
    // MatStepperModule,
    // MatSlideToggleModule,
    // MatSliderModule,
    // MatMenuModule,
    // MatRadioModule,
    // MatProgressBarModule,
    // MatProgressSpinnerModule
  ]
})
export class DefaultModule { }
