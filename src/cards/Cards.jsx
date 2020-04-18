import React, {Component} from 'react'
import Card from './CardUI'
import img1 from '../assets/1.jpg'
import img2 from '../assets/3.jpg'
import img3 from '../assets/4.jpg'

class Cards extends Component {
    render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card imgsrc={img1}
                              title='Chair-vip'/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img2}
                              title='Chair-student'/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img3}
                              title='Chair-boss'/>
                    </div>
                </div>
            </div>
        )
    }
}
export default Cards