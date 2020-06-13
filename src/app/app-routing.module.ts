import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MlistComponent } from './lists/mlist/mlist.component';
import { MupdateComponent } from './updates/mupdate/mupdate.component';
import { AddmedComponent } from './Adds/addmed/addmed.component';
import { BblistComponent } from './lists/bblist/bblist.component';
import { BbupdateComponent } from './updates/bbupdate/bbupdate.component';
import { AddbbComponent } from './Adds/addbb/addbb.component';
import { MslistComponent } from './lists/mslist/mslist.component';
import { MsupdateComponent } from './updates/msupdate/msupdate.component';
import { BbsupdateComponent } from './updates/bbsupdate/bbsupdate.component';
import { BbslistComponent } from './lists/bbslist/bbslist.component';
import { AddbbsComponent } from './Adds/addbbs/addbbs.component';
import { AddmedshopComponent } from './Adds/addmedshop/addmedshop.component';
import { UserListComponent } from './lists/user-list/user-list.component';
import { AdduserComponent } from './adds/adduser/adduser.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './services/auth-guard.service';
import { HeaderComponent } from './header/header.component';
import { LogoutComponent } from './logout/logout.component';
import { Search } from './models/search/search.module';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './lists/search/search.component';
import { UpdateUserComponent } from './updates/update-user/update-user.component';


const routes: Routes = [

{path: 'users',  component: UserListComponent,canActivate:[AuthGuardService]},
{path: 'medicines',  component: MlistComponent,canActivate:[AuthGuardService]},
{path: 'medicineshops',  component: MslistComponent,canActivate:[AuthGuardService]},
{path: 'bloodbankshops',  component: BbslistComponent,canActivate:[AuthGuardService]},
{path: 'bloodbanks',  component: BblistComponent,canActivate:[AuthGuardService]},
{path: 'addmed', component: AddmedComponent,canActivate:[AuthGuardService]},
{path: 'addmedshop', component: AddmedshopComponent,canActivate:[AuthGuardService]},
{path: 'addbbs', component: AddbbsComponent,canActivate:[AuthGuardService]},
{path: 'addbb', component: AddbbComponent,canActivate:[AuthGuardService]},
{path: 'adduser', component: AdduserComponent,canActivate:[AuthGuardService]},
{path: 'updatemedicine/:id', component: MupdateComponent,canActivate:[AuthGuardService]},
{path: 'userupdate/:id', component: UpdateUserComponent,canActivate:[AuthGuardService]},
{path: 'updatebloodbank/:id', component: BbupdateComponent,canActivate:[AuthGuardService]},
{path: 'updatemedicineshop/:id', component: MsupdateComponent,canActivate:[AuthGuardService]},
{path: 'updatebloodbankshop/:id', component: BbsupdateComponent,canActivate:[AuthGuardService]},
{ path: 'login', component: LoginComponent },
{ path: 'logout', component: LogoutComponent},
{ path: 'admin', component: AdminComponent },
{ path: 'search', component: SearchComponent },
{ path: 'footer', component: FooterComponent },
{ path: 'header', component: HeaderComponent ,canActivate:[AuthGuardService]},
{path: '**', redirectTo:'search'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
