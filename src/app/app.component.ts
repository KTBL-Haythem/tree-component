import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { of } from 'rxjs';
import { TreeData } from './service/tree-data.model';
import { TreeDataService } from './service/tree-data.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'tree';
  nestedTreeControl: NestedTreeControl<TreeData>;
  nestedDataSource: MatTreeNestedDataSource<TreeData>;

  constructor(private dataService: TreeDataService) {}

  ngOnInit() {
    // benutzen map um output zu bearbeiten: Beispiel
    this.dataService
      .getData()
      .pipe(
        map((res: any) =>
          res.map((data) => {
            return {
              id: data.Id,
              name: data.Name,
              lastname: 'schmitz',
            };
          })
        )
      )
      .subscribe((data) => {
        console.log(data);
      });
    // Tree
    this.nestedTreeControl = new NestedTreeControl<TreeData>(this._getChildren);
    this.nestedDataSource = new MatTreeNestedDataSource();
    this.dataService
      .getData()
      .subscribe(
        (data) => ((this.nestedDataSource.data = data), console.log(data))
      );
  }

  private _getChildren = (node: TreeData) => of(node.Children);
  hasNestedChild = (_: number, nodeData: TreeData) =>
    nodeData.Children.length > 0;
}
