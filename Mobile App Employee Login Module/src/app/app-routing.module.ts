import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'salary', pathMatch: 'full' },
  { path: 'salary',
  children: [
    {
      path: '',
      loadChildren: './salary-list/salary-list.module#SalaryListPageModule',
      canLoad: [AuthGuard]
    },
    {
      path: ':salaryId',
      loadChildren: './salary-list/salary-details/salary-details.module#SalaryDetailsPageModule',
      
    }
  ]
   },
  { path: 'auth', loadChildren: './auth/auth.module#AuthPageModule' },
  
  // { path: 'salary-details', loadChildren: './salary-list/salary-details/salary-details.module#SalaryDetailsPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
