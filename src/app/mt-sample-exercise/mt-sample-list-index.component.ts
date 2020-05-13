import { Component } from "@angular/core";
import { DataService } from "./data.service";
import { SelectedFarmService } from "./selected-farm.service";
import { Observable, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { Farm } from "./farm";

type farmType = Farm;

@Component({
  selector: "mt-sample-list",
  templateUrl: "./mt-sample-list-index.component.html"
})
export class MtSampleListIndexComponent {
  private farms: Farm[];
   public key: number = null; 
  constructor(private ds: DataService, private selectedFarm: SelectedFarmService) {
    this.getAllFarms();
  }

  getAllFarms() {
    this.ds.getAllFarms().subscribe(response => {
      this.farms = response;
    });
  }

  selectFarm(i: number){
    if(i === null){
      return;
    }
    this.selectedFarm.setDataFarm(this.farms[i]);
  }
  
  //Function to select the id of the grid 
  public onRowSelected(args: RowSelectEventArgs): void {
    let record: farmType = <farmType>args.data;
    this.key = record.id;
    this.selectFarm(this.key);
  }
}
