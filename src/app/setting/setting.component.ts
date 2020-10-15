import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder,Validators,NgForm,} from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Users } from '../user'
import { Api2Service } from '../api2.service';
import { Data } from '../data'



@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
  datas: Data[];
	selectedData: Data = { id : null , first_name: null , last_name :null,email:null}
	constructor(private api2Service: Api2Service ,private router: Router ) {
		this.api2Service.readData().subscribe((datas: Data[])=>{
		this.datas = datas;
		console.log(this.datas);
	}) }
	ngOnInit()
	{
  }

  createData(form){
		form.value.id = this.selectedData.id;
    form.value.first_name = this.selectedData.first_name;
    form.value.last_name = this.selectedData.last_name;
    form.value.email = this.selectedData.email;

		this.api2Service.createData(form.value).subscribe((data: Data)=>{
			console.log("Data created, ", data);
			this.api2Service.readData().subscribe((datas: Data[])=>{
				this.datas = this.datas;
			})
		});
	
}

  selectData(data: Data){
    this.selectedData = data;
  }
  updateData(form){
		form.value.id = this.selectedData.id;
    form.value.first_name = this.selectedData.first_name;
    form.value.last_name = this.selectedData.last_name;
    form.value.email = this.selectedData.email;	
    
		if(this.selectedData && this.selectedData.id){
			this.api2Service.updateData(form.value).subscribe((data: Data)=>{
			console.log("Data updated" , data);
			this.api2Service.readData().subscribe((datas: Data[])=>{
				this.datas = datas;
			})
		});
	}

}

  deleteData(id){
    this.api2Service.deleteData(id).subscribe((data: Data)=>{
      console.log("Data deleted, ", data);
      this.api2Service.readData().subscribe((datas: Data[])=>{
        this.datas = datas;
      })
    });
  }
 
  

}