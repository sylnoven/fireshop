import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import {DiscountsComponent} from './discounts.component';
import {DiscountsListComponent} from './pages/list/discounts-list.component';
import {DiscountsSinglePageComponent} from './pages/single-page/discounts-single-page.component';
import {CanDeactivateGuard} from '@jf/guards/can-deactivate.guard';

const routes: Routes = [
  {
    path: '',
    component: DiscountsComponent,
    children: [
      {path: '', component: DiscountsListComponent},
      {
        path: ':id',
        component: DiscountsSinglePageComponent,
        canDeactivate: [CanDeactivateGuard]
      }
    ]
  }
];

@NgModule({
  declarations: [
    DiscountsComponent,
    DiscountsListComponent,
    DiscountsSinglePageComponent
  ],
  imports: [SharedModule, RouterModule.forChild(routes)]
})
export class DiscountsModule {}
