import React from 'react';
import MenuComponent from '../../components/MenuComponent/MenuComponent';
import BildSnurraComponent from '../../components/BildSnurraComponent/BildSnurraComponent';
import LoaderComponent from '../../components/LoaderComponent/LoaderComponent';
import axios from 'axios'
import { Jumbotron } from 'reactstrap';
class PetPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pet: {},
            loading: true,
            error: false
        };
    }
    componentDidMount() {
        setTimeout(() =>
        this.get(this.props.match.params.id), 2000);
    }
    async get(id) {
       // await axios.get(`${process.env.REACT_APP_API_URL}/json/${id}.json`)
       console.log(`${document.location.protocol}//${document.location.host}/json/${id}.json`);
       await axios.get(`${document.location.protocol}//${document.location.host}/json/${id}.json`)
        .then(response => {
           this.setState({
               pet: response.data,
               loading: false
            }
          )
        })
        .catch(error => {
          console.error(error);
          this.setState({
            loading: false,
            error: true
         })
     });

    }
    render() {
        const {pet, loading, error} = this.state;
        return (
            <>

                <MenuComponent/>
                <div className="container">
                    {loading && (<LoaderComponent text="Vänta medans vi hittar information om djuret, det här kan ta en stund..."/>)}
                    {!loading && !error && (<><h1>{pet.name}</h1>
                    <p>{pet.description}</p>
                    <Jumbotron fluid>
                        {pet.image && (<img src={pet.image} alt={pet.name} className="pet-image"/>)}
                        {pet.images && (
                            <BildSnurraComponent items={pet.images}/>
                        )}
                    </Jumbotron>
                    </>
                    )}
                    
                    {error && <div>Error 404 - Requested page not found</div>}



















                </div>
            </>
        )
    }
}

export default PetPage;
