import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PagesRoutingModule} from './pages-routing.module';
import {DataTableModule} from 'angular5-data-table';
import {DepositComponent} from './deposit/deposit.component';
import {HomeComponent} from './home/home.component';
import {OrderListModule} from 'primeng/orderlist';
import {DashboardComponent} from './dashboard/dashboard.component';
import {SharedModule} from '../shared/shared.module';
import {ProductService} from '../../core/service/productservice';
import {CardModule} from 'primeng/card';


@NgModule({
  declarations: [
    DepositComponent,
    HomeComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    DataTableModule,
    OrderListModule,
    SharedModule,
    CardModule
  ],
  exports:[
    DashboardComponent
  ],
  providers: [
    ProductService
  ]
})
export class PagesModule {
}
