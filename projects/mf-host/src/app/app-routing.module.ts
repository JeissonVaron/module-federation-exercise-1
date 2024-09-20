import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent, pathMatch: 'full' },
  {
    path: 'mf-pokemon',
    loadChildren: () => import('mfPokemon/PokemonListModule').then( (m) => m.PokemonListModule),
  },
  {
    path: 'mf-products',
    loadChildren: () => import('mfProducts/ProductsCatalogModule').then( (m) => m.ProductCatalogModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
