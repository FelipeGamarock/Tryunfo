import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      attr1: 0,
      attr2: 0,
      attr3: 0,
      image: '',
      rarity: '',
      trunfo: false,
      // isSavedButtonDisabled: false,
    };
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      name,
      description,
      attr1,
      attr2,
      attr3,
      image,
      rarity,
      trunfo,
      // isSavedButtonDisabled,
    } = this.state;

    const status1 = parseInt(attr1, 10);
    const status2 = parseInt(attr2, 10);
    const status3 = parseInt(attr3, 10);
    const sumAttrValidation = status1 + status2 + status3 <= '210';
    const limitAttrValidation = (
      (status1 >= '0' && status1 <= '90')
      && (status2 >= '0' && status2 <= '90')
      && (status3 >= '0' && status3 <= '90'));
    const inputsValidation = !!((name && description && image && rarity));
    const validation = (sumAttrValidation && limitAttrValidation && inputsValidation);

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          onInputChange={ this.onInputChange }
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rarity }
          cardTrunfo={ trunfo }
          isSaveButtonDisabled={ !validation }
        />
        <Card
          onInputChange={ this.onInputChange }
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rarity }
          cardTrunfo={ trunfo }
        />
      </div>
    );
  }
}

export default App;
