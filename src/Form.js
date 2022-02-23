import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="card-name">
          Nome
          <input
            type="text"
            data-testid="name-input"
            name="card-name"
            id="card-name"
          />
        </label>

        <label htmlFor="descripton-input">
          Descrição
          <input
            type="textarea"
            data-testid="description-input"
            name="description-input"
            id="descripton-input"
          />
        </label>

        <label htmlFor="attr1">
          Attr01
          <input
            type="number"
            data-testid="attr1-input"
            name="attr1"
            id="attr1"
          />
        </label>

        <label htmlFor="attr2">
          Attr02
          <input
            type="number"
            data-testid="attr2-input"
            name="attr2"
            id="attr2"
          />
        </label>

        <label htmlFor="attr3">
          Attr03
          <input
            type="number"
            data-testid="attr3-input"
            name="attr3"
            id="attr3"
          />
        </label>

        <label htmlFor="image-url">
          Imagem
          <input
            type="text"
            data-testid="image-input"
            name="image-url"
            id="image-url"
          />
        </label>

        <label htmlFor="rarity">
          Raridade
          <select name="rare-input" id="rare-input" data-testid="rare-input">
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>

        <label htmlFor="trunfo">
          <input
            type="checkbox"
            data-testid="trunfo-input"
            name="trunfo"
            id="trunfo"
          />
          Super Trybe Trunfo
        </label>

        <button
          data-testid="save-button"
          type="submit"
          id="submit-button"
        >
          Salvar
        </button>
      </div>
    );
  }
}

export default Form;
