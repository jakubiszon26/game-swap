import React from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "semantic-ui-react";
import axios from "axios";
class CreateOffer extends React.Component {
  state = {
    title: "",
    description: "",
    price: "",
    pic: "",
    category: "",
    picEnabled: false,
    done: false,
    id: null,
    email: "",
  };
  handleSubmit = () => {
    const data = new FormData();
    data.append("file", this.state.pic);
    axios.post(`http://192.168.1.98:5000/uploadDB?title=${this.state.title}&description=${this.state.description}&price=${this.state.price}&category=${this.state.category}&email=${this.state.email}`, data, {}).then((res) => {
      console.log(res.statusText);
    });
    // fetch(
    //   `http://localhost:5000/createOffer?title=${this.state.title}&description=${this.state.description}&price=${this.state.price}&pic=${this.state.pic}&category=${this.state.category}`
    // );
    this.setState({
      done: true,
    });
  };
  handleChange = (e) => {
    if (e.target.type === "file") {
      console.log(e.target.files[0]);
      this.setState({
        [e.target.name]: e.target.files[0],
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  };
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <label htmlFor="title">
          <b>Tytuł oferty</b>
        </label>
        <input
          name="title"
          type="text"
          placeholder="Np. tytuł gry"
          onChange={(e) => this.handleChange(e)}
        />
        <label>
          <b>Opis</b>
        </label>
        <input
          name="description"
          type="text"
          placeholder="napisz cos o tej grze i o stanie np płyty"
          onChange={(e) => this.handleChange(e)}
        />
        <label>
          <b>Kategoria</b>
        </label>
        <input
          name="category"
          placeholder="np. Fantasy"
          onChange={(e) => this.handleChange(e)}
        ></input>
        <label>
          <b>Za jaką grę się wymienisz?</b>
        </label>
        <input
          name="price"
          placeholder="tytuł gry"
          onChange={(e) => this.handleChange(e)}
        ></input>
        <label><b>Adres email do kontaktu</b></label>
        <input name="email" placeholder="np. jankowalski@gs.pl" onChange={e => this.handleChange(e)}></input>
        <label>
          <b>Zdjęcie twojej gry</b>
        </label>
        <input
          name="pic"
          type="file"
          accept="image/x-png,image/gif,image/jpeg"
          onChange={(e) => this.handleChange(e)}
        ></input>
        {this.state.picEnabled && (
          <img src={this.state.pic} alt="" height="370px" width="290px" />
        )}
        <br /> <br />
        <Link to="/">
          <Button negative>Powrót</Button>
        </Link>
        {!this.state.done && (
          <Button positive type="submit" content="Dodaj ofertę" />
        )}
      </Form>
    );
  }
}

export default CreateOffer;
