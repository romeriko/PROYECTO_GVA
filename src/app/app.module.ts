import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {MaterializeModule} from 'angular2-materialize';
import {MainLayoutComponent} from './main-layout/main-layout.component';
import {BlankLayoutComponent} from './blank-layout/blank-layout.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserService} from './services/user.service';
import {HttpClientModule} from '@angular/common/http';
import {GvaClientService} from './services/gva-client.service';
import {FooterComponent} from './footer/footer.component';
import {DeviceListComponent} from './device-list/device-list.component';
import {DataTableComponent} from './data-table/data-table.component';
import {DeviceService} from './services/device/device.service';
import {InstallationComponent} from './installation/installation.component';
import {NgxSmartModalModule} from 'ngx-smart-modal';
import {BasicModalComponent} from './basic-modal/basic-modal.component';
import {UpdateListComponent} from './update-list/update-list.component';
import {AlertComponent} from './alert/alert.component';
import {AlertInstallComponent} from './alert-install/alert-install.component';
import {DeviceComponent} from './device/device.component';
import {UpdateModalComponent} from './update-modal/update-modal.component';
import {ConfirmationCodeModalComponent} from './confirmation-code-modal/confirmation-code-modal.component';
import {RemoveModalComponent} from './remove-modal/remove-modal.component';
import {LogsComponent} from './logs/logs.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MainLayoutComponent,
    BlankLayoutComponent,
    FooterComponent,
    DeviceListComponent,
    DataTableComponent,
    InstallationComponent,
    BasicModalComponent,
    UpdateListComponent,
    AlertComponent,
    AlertInstallComponent,
    DeviceComponent,
    UpdateModalComponent,
    ConfirmationCodeModalComponent,
    RemoveModalComponent,
    LogsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'device/:id', component: DeviceComponent},
      {path: 'device/add', component: DeviceComponent},
      {path: 'devices', component: DeviceListComponent},
      {path: 'alerts', component: AlertComponent},
      {path: 'alerts/install', component: AlertInstallComponent},
      {path: 'installations', component: InstallationComponent},
      {path: 'updates', component: UpdateListComponent},
      {path: 'validation/:id', component: DeviceListComponent},
      {path: 'logs', component: LogsComponent},
      {path: 'login', component: LoginComponent}
    ]),
    MaterializeModule,
    FormsModule,
    NgxSmartModalModule.forChild()
  ],
  providers: [
    GvaClientService,
    UserService,
    DeviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
