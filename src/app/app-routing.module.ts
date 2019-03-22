import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CharacterCreationComponent } from './character-creation/character-creation.component';
import { AttackModifierSimulatorComponent } from './attack-modifier-simulator/attack-modifier-simulator.component';
import { DeckEditorComponent } from './deck-editor/deck-editor.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'characterCreation', component: CharacterCreationComponent },
  { path: 'attackModifierSimulator/:name', component: AttackModifierSimulatorComponent },
  { path: 'deckEditor/:name', component: DeckEditorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
