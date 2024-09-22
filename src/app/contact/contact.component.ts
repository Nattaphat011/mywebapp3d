import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contact1 = [
    {
      name: 'กระบี่ซิลล์สกรีน',
      addressLine1: '167/11 ถนน กระบี่ ตำบล ปากน้ำ',
      addressLine2: 'อำเภอเมืองกระบี่ จังหวัดกระบี่ 81000',
      phone1: '086-2798798',
      phone2: '075-623214',
      lineId: '@krabi_screen',
      email: 'krabi_screen@hotmail.com',
      googleMapUrl: 'https://www.google.com/maps/place/%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%B5%E0%B9%88%E0%B8%8B%E0%B8%B4%E0%B8%A5%E0%B8%84%E0%B9%8C%E0%B8%AA%E0%B8%81%E0%B8%A3%E0%B8%B5%E0%B8%99/@8.0770382,98.9014822,17z/data=!3m1!4b1!4m6!3m5!1s0x30519505cc435de9:0xd3fe4bb19ccf9583!8m2!3d8.0770382!4d98.9040571!16s%2Fg%2F11hdsfw1sp?authuser=1&entry=ttu&g_ep=EgoyMDI0MDkxOC4xIKXMDSoASAFQAw%3D%3D'
    }
  ];
}