import {Component} from '@angular/core';

@Component({
  selector: 'shop-container',
  template: `
    <div class='shop-container'>
      <nav class='sidebar'>
        <a class='shopping-cart'>
          <i class="fa fa-shopping-basket" aria-hidden="true"></i>
          <div class='shopping-cart__badge'>4</div>
        </a>
      </nav>
      <div class='container'>
      </div>
    </div>
  `,
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {

}
