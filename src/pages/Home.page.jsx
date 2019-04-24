import * as React from 'react';
import Maca from "../components/Maca.component";
import './Home.css';
import Http from "../service/Http.service";

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mace: []
        }
    }

    likeItWrapper = async (id) => {
       this.likeIt(id);
    };

    likeIt = async (id) => {
        const response = await Http.post(`/maca/${id}/like`);

        if (response.status !== 204) {
            console.log('Unknown status');
            return;
        }

        console.log('All ok');
        await this.getAll();
    };

    getAll = async () => {
        const response = await Http.get('/maca');
        this.setState({mace: response.data});
    };

    componentDidMount() {
        this.getAll()
    }

    render() {
        const maceComponents = this.state.mace.map((maca) => {
            return (<Maca key={maca.id} id={maca.id} name={maca.name} likes={maca.likes} imageUrl={maca.imageUrl}
                          likeIt={this.likeItWrapper}/>);
        });

        return (
            <div className='home-container'>
                {maceComponents}
            </div>
        );
    }
}

export default HomePage;
