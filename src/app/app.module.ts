import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NavComponent } from './nav/nav.component';
import { TileComponent } from './main/tile/tile.component';
import { CharacterCreationComponent } from './character-creation/character-creation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AttackModifierSimulatorComponent } from './attack-modifier-simulator/attack-modifier-simulator.component';
import { DeckEditorComponent } from './deck-editor/deck-editor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './_global/components/card/card.component';

@NgModule({
   declarations: [
      AppComponent,
      MainComponent,
      TileComponent,
      NavComponent,
      CardComponent,
      CharacterCreationComponent,
      CharacterCreationComponent,
      AttackModifierSimulatorComponent,
      DeckEditorComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      ReactiveFormsModule,
      BrowserAnimationsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
