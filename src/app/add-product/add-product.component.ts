import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { EditorModule } from 'primeng/editor';
import { DropdownModule } from 'primeng/dropdown';
import { ChipsModule } from 'primeng/chips';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuItem } from 'primeng/api';
import { InputNumberModule } from 'primeng/inputnumber';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TagModule } from 'primeng/tag';
import { FileUploadModule } from 'primeng/fileupload';
import { StepperModule } from 'primeng/stepper';

interface CategoryType {
  name: string;
  value: string;
}
interface SubCategoryType{
  [categoryName:string]:CategoryType[]
}

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    EditorModule,
    DropdownModule,
    ChipsModule,
    TabMenuModule,
    InputNumberModule,
    RadioButtonModule,
    TagModule,
    FileUploadModule,
    StepperModule,
  ],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnInit {
  category: CategoryType[] | undefined;
  selectedCategory:CategoryType | undefined;
  subCategory:SubCategoryType = {
    'electronics':[
      {name:'Mobiles',value:'mobiles'},
      {name:'Cameras & Accessories',value:'cameras & accessories'},
      {name:'Computer Peripherals',value:'computer peripherals'}
    ]
  }
  currentSubCategory:CategoryType[] | undefined;
  maximumTagsAllowed:number = 5;
  availableTags:number = this.maximumTagsAllowed;
  allTags!:string[];
  tabMenuItems:MenuItem[] | undefined;
  currentActiveTab:MenuItem | undefined;
  uploadedFiles:any[] = []
  
  ngOnInit(): void {
    this.category = [
      { name: 'Electronics', value: 'electronics' },
      { name: 'Fashion', value: 'fashion' },
      { name: 'Foods', value: 'foods' }
    ];
    this.tabMenuItems = [
      { label: 'Stock', icon: 'pi pi-box'},
      { label: 'Shipping', icon: 'pi pi-truck'},
      { label: 'Attributes', icon: 'pi pi-link'}
    ]
    this.currentActiveTab = this.tabMenuItems[0]
  }
  populateSubcategory() {
    switch (this.selectedCategory?.value) {
      case 'electronics':{
        this.currentSubCategory = this.subCategory[this.selectedCategory.value]
        break;
      }    
      default:
        this.currentSubCategory = []
        break;
    }
  }
  updateAllowedTags(){
    this.availableTags = this.maximumTagsAllowed - this.allTags.length;
  }
  onActiveTabChange(event:MenuItem){
    this.currentActiveTab = event;
  }
}
