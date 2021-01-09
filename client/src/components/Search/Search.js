import React from "react";
import { Input, Form, Icon, Select, Option } from "semantic-ui-react";
class Search extends React.Component {
  state = {
    offers: [],
    text: "Wybierz sposób szukania",
    value: '',
  };
  styles = {
    marginTop: "10px",
  };
  options = [
    {
      key: "my",
      value: "my",
      text: "Co dostanę za przedmiot",
    },
    {
      key: "other",
      value: "other",
      text: "Co dostanę za przedmiot",
    },
  ];
  render() {
    return (
      <React.Fragment>
        <Form loading={false} style={this.styles}>
          <Icon name="search" />
          <Select
            text={this.state.text}
            options={this.options}
            onChange={() =>
              this.setState({
                text: this.props.key,
                value: this.props.value
              })
            }
          />
          <Input placeholder="wyszukaj ofertę" />
        </Form>
      </React.Fragment>
    );
  }
}

export default Search;
