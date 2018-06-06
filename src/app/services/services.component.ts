import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  leftServiceList = [{
    name: 'Geeky',
    icon: 'fa-gears',
    matter_1: 'Being a geek has its own perks. I can provide you with all the development requirements at the best possible way, where all the "gears" fit in..',
    matter_2: 'Well, not to bore you with technicality, but you know: performance, code reusability, modularity, yatta...yatta...yatta....'
  }, {
    name: 'Nerdy',
    icon: 'fa-hand-spock-o',
    matter_1: 'This is the holy-grail of anything and everything to do with web &amp; app development. I will help you choose the best possible technology stack based on your requirement after a &quot;thorough&quot; research..',
    matter_2: '&quot;Who knew, reading up on technology will pay you some day.&quot;'
  }];

  rightServiceList = [{
    name: 'Design',
    icon: 'fa-paint-brush',
    matter_1: 'With a strong design sense, you will always be pleased with my designs, which are sometimes quirky (if you like such stuff) and always latest to the industry standards',
    matter_2: ''
  }, {
    name: 'Branding',
    icon: 'fa-heart',
    matter_1: 'Well, I LOVE branding...To simply put, I will put you on the web..',
    matter_2: 'Well, nicer way to say it: I will help you create your online presence the way you would love it'
  }];

  ngOnInit() {

  }

}
