import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/footer.jsx'
import Jumbotron from '../components/Jumbotron.jsx';

class About extends Component {
  render() {
   return (
     <div>
       <Navbar />
       <Jumbotron title="About" subtitle="The about Subtitle" />
       <div className="container">
           <h2>About</h2>
           <p>
             This is my first asquero page. i am trying some random texts.
           </p>
           <p>
             vscjhashxb scgjuahdxkX S VFD DS CDSF C  fdvjhsjddjas sjd dsjfjdshkas vbjsdhfkaja bjsddsbvjhdkah jsdvbkdhfkak jvhsgcu adgasH hcdahcah hadgcja  havdjhadjhcj jgvjahcadh dhvdahcivh dhvdskjhv kwjdwi kkkkkkkkkkkkkkkkkkk mmmmmmmmmmmmmmmmm llllllllllll gdhsgchc jdsfudhbc jgfujgc cjsdjcsjcv jfgjegfcjvuaa uftu.
           </p>
       </div>
        <Footer />
     </div>
    );
  }
}

export default About
