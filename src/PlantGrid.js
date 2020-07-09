import React, { Component } from 'react';
import './PlantGrid.css';

const data = [
  {
    common_name: 'None',
    complete_data: 'False',
    id: 787997,
    link: 'http://trefle.io/api/plants/787997',
    scientific_name: 'Sonerila margaritacea',
    slug: 'sonerila-margaritacea',
  },
  {
    common_name: 'None',
    complete_data: 'False',
    id: 787997,
    link: 'http://trefle.io/api/plants/787997',
    scientific_name: 'Sonerila margaritacea',
    slug: 'sonerila-margaritacea',
  },
  {
    common_name: 'None',
    complete_data: 'False',
    id: 788011,
    link: 'http://trefle.io/api/plants/788011',
    scientific_name: 'Sonerila nudiscapa',
    slug: 'sonerila-nudiscapa',
  },
  {
    common_name: 'None',
    complete_data: 'False',
    id: 788013,
    link: 'http://trefle.io/api/plants/788013',
    scientific_name: 'Sonerila papuana',
    slug: 'sonerila-papuana',
  },
  {
    common_name: 'None',
    complete_data: 'False',
    id: 788013,
    link: 'http://trefle.io/api/plants/788013',
    scientific_name: 'Sonerila papuana',
    slug: 'sonerila-papuana',
  },
];

class PlantCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      plantData: [],
    };
  }

  componentDidMount() {
    this.callApi()
      .then((res) => {
        this.setState({ plantData: res });
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  callApi = async () => {
    const response = await fetch('/plantinfo');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    else console.log(response);
    return body;
  };

  render() {
    const plantData = this.state.plantData;

    return (
      <ul className='grid'>
        {data.map((p, i) => (
          <li className='plantItem' key={i}>
            {
              // Make this it's own PlantCard component and
              //pass in props
              p.scientific_name
            }
          </li>
        ))}
      </ul>
    );
  }
}

export default PlantCard;
