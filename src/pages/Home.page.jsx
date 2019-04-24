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

    likeIt = (id) => {
        axios.post(`https://eajcrbbnc1.execute-api.eu-central-1.amazonaws.com/dev/maca/${id}/like`).then(response => {
            if (response.status === 204) {
                console.log('All ok');
                this.getAll();
                return;
            }
            console.log('Unknown status');
        });
    };

    getAll = () => {
        axios.get('https://eajcrbbnc1.execute-api.eu-central-1.amazonaws.com/dev/maca').then(response => {
            console.log(response);
            this.setState({mace: response.data});
        });
    };

    componentDidMount() {
        this.getAll()
    }

    render() {
        const maceComponents = this.state.mace.map((maca) => {
            return (<Maca key={maca.id} id={maca.id} name={maca.name} likes={maca.likes} imageUrl={maca.imageUrl}
                          likeIt={this.likeIt}/>);
        });

        return (
            <div className='home-container'>
                {maceComponents}
            </div>
        );
    }
}

export default HomePage;
