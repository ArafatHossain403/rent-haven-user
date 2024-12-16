import { useMutation, UseMutationOptions } from 'react-query';
import { graphqlFetcher } from '../lib/fetcher';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CreateAmenityInput = {
  name: Scalars['String']['input'];
};

export type CreateUserInputDto = {
  bio?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type LoginDto = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  /** custom code */
  code: Scalars['Float']['output'];
  deviceToken: Scalars['String']['output'];
  /** message */
  message?: Maybe<Scalars['String']['output']>;
  /** success */
  success: Scalars['Boolean']['output'];
  token: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAmenity: ResponseModel;
  loginUser: LoginResponse;
  registerUser: LoginResponse;
};


export type MutationCreateAmenityArgs = {
  createAmenityInput: CreateAmenityInput;
};


export type MutationLoginUserArgs = {
  loginDto: LoginDto;
};


export type MutationRegisterUserArgs = {
  createUserDto: CreateUserInputDto;
};

export type Query = {
  __typename?: 'Query';
  sayHello: Scalars['String']['output'];
};

export type ResponseModel = {
  __typename?: 'ResponseModel';
  /** custom code */
  code: Scalars['Float']['output'];
  /** message */
  message?: Maybe<Scalars['String']['output']>;
  /** success */
  success: Scalars['Boolean']['output'];
};

export type RegisterUserMutationVariables = Exact<{
  data: CreateUserInputDto;
}>;


export type RegisterUserMutation = { __typename?: 'Mutation', data: { __typename?: 'LoginResponse', code: number, deviceToken: string, message?: string | null, success: boolean, token: string } };



export const RegisterUserDocument = `
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

export const useRegisterUserMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<RegisterUserMutation, TError, RegisterUserMutationVariables, TContext>) => {
    
    return useMutation<RegisterUserMutation, TError, RegisterUserMutationVariables, TContext>(
      ['registerUser'],
      (variables?: RegisterUserMutationVariables) => graphqlFetcher<RegisterUserMutation, RegisterUserMutationVariables>(RegisterUserDocument, variables)(),
      options
    )};
