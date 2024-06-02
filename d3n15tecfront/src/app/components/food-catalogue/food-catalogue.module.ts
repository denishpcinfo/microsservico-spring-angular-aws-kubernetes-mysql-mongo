import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { FoodCatalogueRoutingModule } from './food-catalogue-routing.module';
import { FoodCatalogueComponent } from './components/food-catalogue.component'; 
import { LOCALE_ID } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    FoodCatalogueComponent
  ],
  imports: [
    CommonModule,
    FoodCatalogueRoutingModule,
    CurrencyMaskModule,
    MatButtonModule,
    MatTooltipModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: "pt-BR" }]
})
export class FoodCatalogueModule { }
