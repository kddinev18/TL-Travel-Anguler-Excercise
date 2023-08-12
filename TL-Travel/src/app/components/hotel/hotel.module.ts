import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelRoutingModule } from './hotel-routing.module';
import { HotelsComponent } from './hotels/hotels.component';


@NgModule({
  declarations: [
    HotelsComponent
  ],
  imports: [
    CommonModule,
    HotelRoutingModule
  ]
})
export class HotelModule { }
