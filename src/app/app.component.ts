import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'search';
  //itemlist (original)
  itemList = [
    {
      id: 1,
      title: "Angular",
      feedback: "Great Frame Work!"
    },
    {
      id: 2,
      title: "Javascript",
      feedback: "Programming Language"
    },
    {
      id: 3,
      title: "CSS",
      feedback: "Styling pages"
    },
    {
      id: 4,
      title: "Node.js",
      feedback: "Bla Bla Bla..."
    },
    {
      id: 5,
      title: "HTML",
      feedback: "Hyber Text Markup Language"
    },
    {
      id: 6,
      title: "C#",
      feedback: "OOP"
    },
    {
      id: 7,
      title: "Angular2",
      feedback: "Great Frame Work!"
    },
  ]

  //itemlist2 (copy)
  itemList2 = this.itemList

  //searchTitle
  searchTitle(searchVal) {
    this.itemList2 = [];
    //h2
    let h2 = document.querySelector("h2");
    h2.style.display = "none";
    //p
    var p = document.querySelector("p");
    //seach
    var search = document.querySelector('input');
    if (search.value != "") {
      p.style.display = "none";
    } else {
      p.style.display = "block";
    }
    //searching
    for (let i = 0; i < this.itemList.length; i++) {
      if (this.itemList[i].title.toLocaleLowerCase().match(searchVal)) {
        this.itemList2.push(this.itemList[i]);
      }
    }
    //notfound
    if (this.itemList2.length == 0) {
      h2.style.display = "block"
    }
  }
}


///////////////////////////////////////////////
//console.log(searchVal);
//   this.itemList.filter((item) => {
//     var result = item.title.charAt(0).toLocaleLowerCase() == searchVal;
//     if (result) {
//       console.log(item)
//     }
//   });
// }