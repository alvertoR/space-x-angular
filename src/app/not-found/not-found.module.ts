import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundComponent } from './components/page-not-found/not-found.component';
import { NotFoundRoutingModule } from './not-found-routing.module';

@NgModule({
    declarations: [
        NotFoundComponent
    ],
    imports: [
        CommonModule,
        NotFoundRoutingModule
    ]
})
export class NotFoundModule { }