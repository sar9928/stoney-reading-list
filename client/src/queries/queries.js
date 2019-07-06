import {gql} from 'apollo-boost';

// make sure to have ticks directly after for query similiar to GraphiQL
const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`

// make sure to have ticks directly after for query similiar to GraphiQL
const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`

// use $ for query variables
const addBookMutation = gql`
  mutation($name: String!, $genre: String!, $authorId: ID!) {
      addBook(name: $name, genre: $genre, authorId: $authorId) {
          name
          id
      }
  }
`

const getBookQuery = gql`
  query($id: ID){
    book(id: $id) {
      id
      name
      genre
      author {
        id
        name
        age
        books {
          name
          id
        }
      }
    }
  }
`

export {getAuthorsQuery, getBooksQuery, addBookMutation, getBookQuery};