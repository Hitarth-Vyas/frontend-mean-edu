import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses = [
    {
      id: 1,
      title: "Course-1",
      url: "../../../../assets/course/course.webp",
      // url: "../../../../assets/course/dys.png",
      description: "The DYS course is an internationally acclaimed course and has been conducted in over 100 universities around the world. Today, self-management, positive thinking, stress management, inter-personnel relations are standard training activities in the corporate houses, and there is much emphasis on Spiritual Quotient (SQ) and Emotional Quotient (EQ). This 4 session course would provide a great boost to your SQ and your EQ."
    },
    // {
    //   id: 2,
    //   title: "Course-2",
    //   url: "../../../../assets/course/course-2.jpg",
    //   description: "“The two most important days in your life are the day you are born and the day you find out why.” – Mark Twain. \n When we are born is past information, but to know why we are born will bring transformation. Learn the essence of life and gita in six sessions of “Journey of Self Discovery Course”. Quench your quest and enjoy this journey towards stability, wisdom & bliss !!"
    // }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
