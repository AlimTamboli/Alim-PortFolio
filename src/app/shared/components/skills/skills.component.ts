import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skillsArr = [{
    name : "HTML",
  },
  {
    name : "CSS",
  },
  {
    name : "JavaScript",
  },
  {
    name : "BootStrap",
  },
  {
    name : "Flex",
  },
  {
    name : "Sass",
  }
];

  constructor() { }

  ngOnInit(): void {
  }

}
