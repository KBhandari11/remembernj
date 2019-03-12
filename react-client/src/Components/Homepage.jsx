import React, { Component } from 'react';
class HomePage extends Component {
  render() {
    return (
      <div>
      <img class= "collage" src={require('./Pics/1.0-Home/Collage.jpg')}/>
      <div class="text" styles={{align: "center", padding:"50px"}} >
      <h1 style={{align:"center"} }>Life and Loss in Germany: The 80th Anniversary of Kristallnacht</h1>
      Over half a million Jews called Germany their home in 1933. Kristallnacht, the Night of the Broken Glass, a Nazi-organized pogrom of November 1938, marked a turning point for Germany's Jews. More than half of them had left the country by 1939. Up to 180,000 German Jews were murdered. Only a small number survived. Life and Loss in Germany: The 80th Anniversary of Kristallnacht explores the thriving Jewish life in German lands and commemorates the human and material destruction during the Holocaust.
      </div>
      </div>
    )
  }
}
export default HomePage;
