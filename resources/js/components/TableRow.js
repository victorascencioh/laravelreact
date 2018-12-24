import React, { Component } from 'react';
import { Link, BrowserRouter, Redirect } from 'react-router-dom';
import MyGlobleSetting from './MyGlobleSetting';


class TableRow extends Component {
  constructor(props) {
      super(props);
      this.state = { redirect: false }
      this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log(this.props);
    let uri = MyGlobleSetting.url + `/api/products/${this.props.obj.id}`;
    axios.delete(uri).then( (response) => {
      this.setState({ redirect: true });
      return <Redirect to='/display-item'/>;
      //BrowserRouter.history.push('/display-item');
    });
      
  }
  render() {

    const { redirect } = this.state;

      if (redirect) {
        return <Redirect to='/display-item'/>;
      }

    return (
        <tr>
          <td>
            {this.props.obj.id}
          </td>
          <td>
            {this.props.obj.title}
          </td>
          <td>
            {this.props.obj.body}
          </td>
          <td>
          <form onSubmit={this.handleSubmit}>
            <Link to={"edit/"+this.props.obj.id} className="btn btn-primary">Edit</Link>
           <input type="submit" value="Delete" className="btn btn-danger"/>
         </form>
          </td>
        </tr>
    );
  }
}


export default TableRow;