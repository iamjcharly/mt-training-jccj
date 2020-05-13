import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Farm} from './farm';

export class SelectedFarmService {
  private farmInfoSource = new Subject();
  public farmInfo = this.farmInfoSource.asObservable();

  setDataFarm(farm: Farm){
    this.farmInfoSource.next(farm);
  }
} 
