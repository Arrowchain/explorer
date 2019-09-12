import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlockComponent } from './components/block/block.component';
import { TransactionComponent } from './components/transaction/transaction.component';

const routes: Routes = [
  {path: 'block/:id', component: BlockComponent},
  {path: 'tx/:id', component: TransactionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
