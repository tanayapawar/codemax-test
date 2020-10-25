import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CartServiceService } from '../product-list/cart-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cartEmpty: boolean =false;
  countItems :{
    count:0,
    prize:0
  };
  constructor(public translate: TranslateService,
    private cartService: CartServiceService) {
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|es/) ? browserLang : 'en')
  }


  ngOnInit() {
    this.cartService.$cartItems
      .subscribe((data) => {
        this.cartEmpty= true;
        this.countItems = data;
        console.log('hi', data);
      })
  }
   

}
