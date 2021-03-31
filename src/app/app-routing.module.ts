import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { LoginComponent } from './layouts/login/login.component';
import { AccountComponent } from './modules/account/account.component';
import { CustomerComponent } from './modules/customer/customer.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { MerchantComponent } from './modules/merchant/merchant.component';
import { OrderComponent } from './modules/order/order.component';
import { PaymentComponent } from './modules/payment/payment.component';
import { ProductComponent } from './modules/product/product.component';
import { RiderComponent } from './modules/rider/rider.component';
import { SettingComponent } from './modules/setting/setting.component';
import { SigninComponent } from './modules/signin/signin.component';
import { SignupComponent } from './modules/signup/signup.component';
import { VehicleComponent } from './modules/vehicle/vehicle.component';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
      { path: 'merchant', component: MerchantComponent, canActivate: [AuthGuard] },
      { path: 'account', component: AccountComponent, canActivate: [AuthGuard] },
      { path: 'customer', component: CustomerComponent, canActivate: [AuthGuard] },
      { path: 'order', component: OrderComponent, canActivate: [AuthGuard] },
      { path: 'product', component: ProductComponent, canActivate: [AuthGuard] },
      { path: 'payment', component: PaymentComponent, canActivate: [AuthGuard] },
      { path: 'rider', component: RiderComponent, canActivate: [AuthGuard] },
      { path: 'vehicle', component: VehicleComponent, canActivate: [AuthGuard] },
      { path: 'setting', component: SettingComponent, canActivate: [AuthGuard] }
    ]
  },
  {
    path: '',
    component: LoginComponent,
    children: [
      {
        path: 'signin', component: SigninComponent
      },
      {
        path: 'signup', component: SignupComponent
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
