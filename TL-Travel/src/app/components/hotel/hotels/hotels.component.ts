import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/models/hotel.model';
import { Pagination, SortColumn } from 'src/app/models/pagination.model';
import { ServerResponse } from 'src/app/models/server-response.model';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent implements OnInit {
  private hotelService: HotelService
  public hotels: Hotel[] = [];

  constructor(hotelService: HotelService)
  {
    this.hotelService = hotelService;
  }
  ngOnInit(): void {
    const pagination = new Pagination(1, 20, []);

    this.hotelService.getAllHotels(pagination)
    .subscribe((serverResponse: ServerResponse<Hotel>) => {
      this.hotels = serverResponse.records;
    });
  }
}
