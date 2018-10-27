// import React, { Component } from "react";
// import API from "../../utils/API";
// import { Link } from "react-router-dom";
// import Nav from "../../components/Nav";
//
// class Books extends Component {
//   state = {
//     books: [],
//     title: "",
//     author: "",
//     synopsis: ""
//   };
//
//   componentDidMount() {
//     this.loadAccount();
//   }
//
//   loadAccount = () => {
//     API.getAccount()
//       .then(res =>
//         this.setState({ account: res.data, title: "", author: "", synopsis: "" })
//       )
//       .catch(err => console.log(err));
//   };
//
//   deleteAccount = id => {
//     API.deleteAccount(id)
//       .then(res => this.loadAccount())
//       .catch(err => console.log(err));
//   };
//
//   handleInputChange = event => {
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value
//     });
//   };
//
//   handleFormSubmit = event => {
//     event.preventDefault();
//     if (this.state.email && this.state.password) {
//       API.saveBook({
//         firstName: this.state.firstName,
//         lastName: this.state.lastName,
//         dob: this.state.dob,
//         address: {
//           street: this.state.street,
//           city: this.state.city,
//           stateOfRes: this.state.stateOfRes,
//           zip: this.state.zip
//         },
//         billingInfo: {
//           nameOnCard: this.state.nameOnCard,
//           cardType: this.state.nameOnCard,
//           number: this.state.number,
//           expiration: {
//             month: this.state.month,
//             year: this.state.year
//           },
//           ccv: this.state.ccv
//         },
//         joinDate: this.state.joinDate,
//         packages: {
//           tier: this.state.tier,
//           preference: this.state.preference
//         },
//         email: this.state.email,
//         password: this.state.password
//       })
//         .then(res => this.loadAccount())
//         .catch(err => console.log(err));
//     }
//   };
//
//   render() {
//     return (
//       <Container fluid>
//         <Row>
//           <Col size="md-6">
//             <Jumbotron>
//               <h1>What Books Should I Read?</h1>
//             </Jumbotron>
//             <form>
//               <Input
//                 value={this.state.title}
//                 onChange={this.handleInputChange}
//                 name="title"
//                 placeholder="Title (required)"
//               />
//               <Input
//                 value={this.state.author}
//                 onChange={this.handleInputChange}
//                 name="author"
//                 placeholder="Author (required)"
//               />
//               <TextArea
//                 value={this.state.synopsis}
//                 onChange={this.handleInputChange}
//                 name="synopsis"
//                 placeholder="Synopsis (Optional)"
//               />
//               <FormBtn
//                 disabled={!(this.state.author && this.state.title)}
//                 onClick={this.handleFormSubmit}
//               >
//                 Submit Book
//               </FormBtn>
//             </form>
//           </Col>
//           <Col size="md-6 sm-12">
//             <Jumbotron>
//               <h1>Books On My List</h1>
//             </Jumbotron>
//             {this.state.books.length ? (
//               <List>
//                 {this.state.books.map(book => (
//                   <ListItem key={book._id}>
//                     <Link to={"/books/" + book._id}>
//                       <strong>
//                         {book.title} by {book.author}
//                       </strong>
//                     </Link>
//                     <DeleteBtn onClick={() => this.deleteBook(book._id)} />
//                   </ListItem>
//                 ))}
//               </List>
//             ) : (
//               <h3>No Results to Display</h3>
//             )}
//           </Col>
//         </Row>
//       </Container>
//     );
//   }
// }
//
// export default Books;
