
class MessageForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {name: '', message: 'Текст сообщения'};
      this.onChangeName = this.onChangeName.bind(this);
      this.onChangeMessage = this.onChangeMessage.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event){
      event.preventDefault();
    }

    onChangeMessage(event){
      this.setState({message: event.target.value});
    }

    onChangeEmail(e) {
      this.setState({email: e.target.value});
    }

    render() {
      return (
        <form onSubmit={this.onSubmit}>
          <p><label> email получателя: <input type="text" name="email" value={this.state.email}
                           onChange={this.onChangeEmail}/></label></p>
          <p><label>Текст сообщения: <textarea type="text" name="message" value={this.state.message}
            onChange={this.onChangeMessage}/></label></p>
          <p><input type="submit" value="Submit" /></p>
        </form>
      );
    }
  }

class MessageList extends React.Component{
  constructor(props){
    super(props);
    this.Update = this.Update.bind(this);

  }
}

  ReactDOM.render(<MessageForm />,  document.getElementById('root'));
