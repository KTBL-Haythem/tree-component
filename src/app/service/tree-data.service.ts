import {  TreeData } from './tree-data.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TreeDataService {
  // Fake API
api = 'https://run.mocky.io/v3/49d1e4a7-e06b-4f78-b20c-ceb5e51c72df'
  constructor(private http: HttpClient) {}

  getData():Observable<TreeData[]> {
    return this.http.get<TreeData[]>(this.api)
  }

 /*   _dataChange = new BehaviorSubject<TreeData[]>
  (
    [{
      Id: 1,
      Name: 'Rind',
      Description: 'Father 1',
      Children: [
        {
          Id: 3,
          Name: 'Kalb',
          Description: 'Children 1',
          Children: []
        },
        {
          Id: 4,
          Name: 'Mastrind',
          Description: 'Children 2',
          Children: [
            {
              Id: 5,
              Name: 'Mastrind-children',
              Description: 'GrandChildren 1',
              Children: []
            }
          ]
        },
      ]
    },
    {
      Id: 2,
      Name: 'Regenbogenforelle',
      Description: 'Father 2',
      Children: []
    }
  ]
  ); */
}
