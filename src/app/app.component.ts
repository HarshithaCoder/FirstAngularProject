
import { AfterViewInit, ApplicationInitStatus, Component,OnInit, ViewChild } from "@angular/core";
import d from "./appdata.json";
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { DialogBoxComponent } from "./dialog-box/dialog-box.component";
export interface applicant{
  "A": "string",
  "B": "string",
  "C": "string",
  "D": "string"
}

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit{
  displayedColumns: string[] = ['A', 'B', 'C','D','Actions'];
  index!: number;

  applicants :applicant[] = JSON.parse(JSON.stringify(d));
  dataS: applicant[] = this.applicants;
  dataSource = new MatTableDataSource(this.dataS);

  @ViewChild(MatTable, { static: true })
  table!: MatTable<any>;

  @ViewChild('paginator')
  paginator!: MatPaginator;

   constructor(public dialog: MatDialog) {
  } 
 
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;  
}

 openDialog(i: number,fname:string,lname:string,date:string,stat:string): void {
  this.index = i;
 // console.log(this.index);
  //console.log(this.dataS[i]);
  // console.log(this.dataSource.data);
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '300px',
      height: '500px',
      data: {A: fname, B: lname, C: date, D: stat}
    });
    dialogRef.afterClosed().subscribe(result => 
     {
       if(result == null){
        this.dataSource.data = this.dataS;
      }
      else{
          this.dataS[i] = result;
           this.dataSource.data = this.dataS;
      }
          this.table.renderRows();
    } );
  } 
}