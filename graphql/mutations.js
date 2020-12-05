/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      username
      image
      name
      email
      tweets {
        items {
          id
          content
          userID
          image
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      username
      image
      name
      email
      tweets {
        items {
          id
          content
          userID
          image
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      username
      image
      name
      email
      tweets {
        items {
          id
          content
          userID
          image
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createTweet = /* GraphQL */ `
  mutation CreateTweet(
    $input: CreateTweetInput!
    $condition: ModelTweetConditionInput
  ) {
    createTweet(input: $input, condition: $condition) {
      id
      content
      userID
      image
      user {
        id
        username
        image
        name
        email
        tweets {
          nextToken
        }
        createdAt
        updatedAt
      }
      likes {
        items {
          id
          userID
          tweetID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateTweet = /* GraphQL */ `
  mutation UpdateTweet(
    $input: UpdateTweetInput!
    $condition: ModelTweetConditionInput
  ) {
    updateTweet(input: $input, condition: $condition) {
      id
      content
      userID
      image
      user {
        id
        username
        image
        name
        email
        tweets {
          nextToken
        }
        createdAt
        updatedAt
      }
      likes {
        items {
          id
          userID
          tweetID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteTweet = /* GraphQL */ `
  mutation DeleteTweet(
    $input: DeleteTweetInput!
    $condition: ModelTweetConditionInput
  ) {
    deleteTweet(input: $input, condition: $condition) {
      id
      content
      userID
      image
      user {
        id
        username
        image
        name
        email
        tweets {
          nextToken
        }
        createdAt
        updatedAt
      }
      likes {
        items {
          id
          userID
          tweetID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createLike = /* GraphQL */ `
  mutation CreateLike(
    $input: CreateLikeInput!
    $condition: ModellikeConditionInput
  ) {
    createLike(input: $input, condition: $condition) {
      id
      userID
      tweetID
      user {
        id
        username
        image
        name
        email
        tweets {
          nextToken
        }
        createdAt
        updatedAt
      }
      tweet {
        id
        content
        userID
        image
        user {
          id
          username
          image
          name
          email
          createdAt
          updatedAt
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateLike = /* GraphQL */ `
  mutation UpdateLike(
    $input: UpdateLikeInput!
    $condition: ModellikeConditionInput
  ) {
    updateLike(input: $input, condition: $condition) {
      id
      userID
      tweetID
      user {
        id
        username
        image
        name
        email
        tweets {
          nextToken
        }
        createdAt
        updatedAt
      }
      tweet {
        id
        content
        userID
        image
        user {
          id
          username
          image
          name
          email
          createdAt
          updatedAt
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteLike = /* GraphQL */ `
  mutation DeleteLike(
    $input: DeleteLikeInput!
    $condition: ModellikeConditionInput
  ) {
    deleteLike(input: $input, condition: $condition) {
      id
      userID
      tweetID
      user {
        id
        username
        image
        name
        email
        tweets {
          nextToken
        }
        createdAt
        updatedAt
      }
      tweet {
        id
        content
        userID
        image
        user {
          id
          username
          image
          name
          email
          createdAt
          updatedAt
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
