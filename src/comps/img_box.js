import {React,Component} from 'react';
import './img_box.css';
import {db} from '../firebase/config';

 class Imgbox extends Component{
     state={
         tiles:null
     } 
     componentDidMount()
     {
         console.log('mouted');
         db.collection("images").get().then((querySnapshot) => {
            const tiles =[]
            querySnapshot.forEach((doc) => {
    
                console.log(`${doc.id} => ${doc.data()}`);
                const data =doc.data()
                tiles.push(data)

            });
           this.setState({tiles:tiles})
           console.log(tiles);
        });
    }
    render(){
  return (
    <div className="imgbox">


      <div id="carousel">
          {
              this.state.tiles&&
              this.state.tiles.map( tile =>{
                  return(
                    <div className="slide">
                    <img src="{tile.url}"  height="175px" width="250px"/>
                    <h3>{tile.text}</h3>
                </div>
                  )
              })
          }
   
</div>
    </div>
  )
}
 }
export default Imgbox;