import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpClientModule } from '@angular/common/http';
import { YouTubePlayerModule } from "@angular/youtube-player";
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import {MatChipsModule} from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatBadgeModule} from '@angular/material/badge';

// Components
import { DeleteButtonComponent } from './delete-button/delete-button.component';
import { ShellComponent } from './shell/shell.component';
import { FooterComponent } from './footer/footer.component';

const components = [
  ShellComponent,
  DeleteButtonComponent,
  FooterComponent,
];

const modules = [
  CommonModule,
  RouterModule,
  MatToolbarModule,
  MatIconModule,
  LayoutModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatMenuModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatSnackBarModule,
  MatTabsModule,
  MatAutocompleteModule,
  DragDropModule,
  MatProgressSpinnerModule,
  HttpClientModule,
  YouTubePlayerModule,
  NgxMaterialTimepickerModule,
  MatRadioModule,
  FormsModule,
  MatChipsModule,
  MatDialogModule,
  MatExpansionModule,
  MatBadgeModule
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    ...modules,
  ],
  exports: [
    ...components,
    ...modules
  ],
})
export class SharedModule {}