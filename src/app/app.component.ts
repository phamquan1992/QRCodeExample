import { Component } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'qrcodeex';

  hoten = '';
  diachi = '';
  sodienthoai = '';
  giatri: string = '';
  url: SafeUrl = '';
  str_arr: string[] = [];
  
  onCodeChange(url: SafeUrl) {
    this.url = url;
  }
  change_value(gt: HTMLInputElement) {
    if (this.str_arr.length == 0)
      this.str_arr.push(gt.name + ':' + gt.value);
    else {
      let dem = -1;
      let check = 0;
      this.str_arr.forEach(element => {
        dem = dem + 1;
        let it_temp = element.split(':');
        let key_it = it_temp[0];
        if (key_it == gt.name) {
          this.str_arr[dem] = gt.name + ':' + gt.value;
          if (gt.value === '')
            this.str_arr.splice(dem, 1);
          check = 1;
        }
      });
      if (check === 0)
        this.str_arr.push(gt.name + ':' + gt.value);
    }
    console.log(JSON.stringify(this.str_arr));
    this.giatri = JSON.stringify(this.str_arr).replace('[', '').replace(']', '');
  }
}
