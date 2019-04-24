import * as React from 'react';
import * as axios from 'axios';
import Maca from "../components/Maca.component";
import './Home.css';

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mace: []
        }
    }

    componentDidMount() {
        axios.get('http://macecoreservice-env.c8prxhgpse.eu-central-1.elasticbeanstalk.com/maca').then(response => {
            console.log(response);
            this.setState({mace: response.data});
        });
    }

    render() {
        const maceComponents = this.state.mace.map((maca) => {
            return (<Maca key={maca.id} name={maca.name} likes={maca.likes} imageUrl={maca.imageUrl}/>);
        });

        return (
            <div className='home-container'>
                {maceComponents}
            </div>
        );
    }
}

export default HomePage;
