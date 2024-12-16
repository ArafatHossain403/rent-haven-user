import gql from 'graphql-tag';

export const RegisterUser = gql`
    mutation registerUser($data: CreateUserInputDto!) {
  data: registerUser(createUserDto: $data) {
    code
    deviceToken
    message
    success
    token
  }
}
    `;