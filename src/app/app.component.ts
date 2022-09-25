import { Component } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'qrcodeex';

  hoten = ' ';
  diachi = ' ';
  sodienthoai = ' ';
  giatri: string = ' ';
  url: SafeUrl = '';

  setgt() {
    this.giatri = 'Họ tên: ' + this.hoten + '|Địa chỉ: ' + this.diachi + '|Số điện thoại: ' + this.sodienthoai;
  }

  hoten_change(newchange: string) {
    this.hoten = newchange;
    this.setgt();
  }
  diachi_change(newchange: string) {
    this.diachi = newchange;
    this.setgt();
  }
  sodt_change(newchange: string) {
    this.sodienthoai = newchange;
    this.setgt();
  }
  onCodeChange(url: SafeUrl) {
    this.url = url;
  }
}
