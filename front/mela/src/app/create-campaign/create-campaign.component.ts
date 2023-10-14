import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from "../services/user.service";
import fundTags from "../data/fund-tags"
import {FundTag} from "../models/fundTag";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Editor} from "ngx-editor";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {FundraiserClassification} from "../models/fundraiserClassification";
import {fundraiserClassifications} from "../data/fund-class";

@Component({
  selector: 'app-create-campaign',
  templateUrl: './create-campaign.component.html',
  styleUrls: ['./create-campaign.component.css']
})
export class CreateCampaignComponent implements OnInit, OnDestroy{

  selectedImage: string | null = null;
  selectedImageFile?: File;
  campaignForm : FormGroup;
  fundTypes = fundTags;
  loading : boolean = false;
  fundClasses : FundraiserClassification[] = fundraiserClassifications;


  editor: Editor = new Editor();

  tabStatus = {
    introTab: true,
    categoryTab: false,
    goalTab: false,
    imageTab: false,
    titleAndDiscTab: false,
  }

  constructor(private userService: UserService, private formBuilder: FormBuilder, private toast: ToastrService, private router: Router) {

    this.campaignForm = this.formBuilder.group({
      title: "",
      description:"",
      goal:0
    })
  }

  ngOnInit() {
    this.editor = new Editor();
  }

  ngOnDestroy() {
    this.editor.destroy()
  }


  onFileSelected(event: any): void {

    const file = event.target.files[0];
    if (file) {
      this.selectedImageFile = file;
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.selectedImage = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  removeImage(): void {
    this.selectedImage = null;
  }

  classSelect(id: number){

    this.fundClasses.forEach((fundClass)=>{
      fundClass.selected = fundClass.id == id;
    })

  }

  tagSelect(type: string){
    this.fundTypes.forEach((fund)=>{
      if (fund.type === type){

        fund.selected = !fund.selected;
      }
    })
  }

  onSubmit(){
    this.loading = true;

    let selectedTags: FundTag[] = this.fundTypes.filter((fund)=>fund.selected);
    let selectedClass: FundraiserClassification[] = this.fundClasses.filter((fundClass)=>fundClass.selected)

    if (this.campaignForm.invalid || selectedTags.length == 0 || selectedClass.length == 0 || !this.selectedImageFile){
      this.toast.error("place provide all the requested data")
      this.loading = false;
      return
    }

    this.userService.createCampaign(this.campaignForm.value, this.selectedImageFile!, selectedTags, selectedClass[0]).subscribe(
      (res)=>{

        this.toast.success("campaign created successfully")
        this.loading = false;

        this.router.navigateByUrl(`/campaign/${res.data._id}`)

      },(error)=>{

        this.toast.error("Couldn't create Campaign")
        this.loading = false;
      }
    );

  }

}
