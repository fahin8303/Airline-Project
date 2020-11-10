import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LocationAir } from './Module/LocationAir';
import { ListAirlineService } from './service/list-airline.service';

@Component({
  selector: 'app-totallist',
  templateUrl: './totallist.component.html',
  styleUrls: ['./totallist.component.css'],
})
export class TotallistComponent implements OnInit {
  displayedColumns = ['code', 'desc'];
  dataSource: MatTableDataSource<LocationAir>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private listairservice: ListAirlineService) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.listairservice.getAirlineList().subscribe((res: any) => {
      this.dataSource = new MatTableDataSource(res.data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
}
