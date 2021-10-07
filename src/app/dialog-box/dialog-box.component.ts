import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'pm-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
    
    formControl = new FormControl('', [
      Validators.required
      
    ]);
  
    getErrorMessage() {
      return this.formControl.hasError('required') ? 'Required field' :
        
          '';
    }
  
    submit() {
      
    }
  
   
  ngOnInit(): void {
  }
  
}
