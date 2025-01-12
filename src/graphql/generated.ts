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
  DateTime: { input: any; output: any; }
};

export type BookingModel = {
  __typename?: 'BookingModel';
  checkInDate: Scalars['DateTime']['output'];
  checkOutDate: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  guest: UserModel;
  guestId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  listing: ListingModel;
  listingId: Scalars['String']['output'];
  payment: PaymentModel;
  paymentId: Scalars['String']['output'];
  totalPrice: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type CategoryLimitOffset = {
  __typename?: 'CategoryLimitOffset';
  limit?: Maybe<Scalars['Int']['output']>;
  nodes: Array<CategoryModel>;
  other_count?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  total_count: Scalars['Int']['output'];
};

export type CategoryModel = {
  __typename?: 'CategoryModel';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type CreateAmenityInput = {
  name: Scalars['String']['input'];
};

export type CreateCategoryInput = {
  name: Scalars['String']['input'];
};

export type CreateListingInput = {
  availableFrom: Scalars['String']['input'];
  availableTo: Scalars['String']['input'];
  categoryId: Scalars['String']['input'];
  description: Scalars['String']['input'];
  hostId: Scalars['String']['input'];
  images: Array<Scalars['String']['input']>;
  location: Scalars['String']['input'];
  pricePerNight: Scalars['Float']['input'];
  status: Scalars['Int']['input'];
  title: Scalars['String']['input'];
};

export type CreateUserInputDto = {
  bio?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type ImageModel = {
  __typename?: 'ImageModel';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  listingId: Scalars['String']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
};

export type ListingLimitOffset = {
  __typename?: 'ListingLimitOffset';
  limit?: Maybe<Scalars['Int']['output']>;
  nodes: Array<ListingModel>;
  other_count?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  total_count: Scalars['Int']['output'];
};

export type ListingModel = {
  __typename?: 'ListingModel';
  availableFrom: Scalars['DateTime']['output'];
  availableTo: Scalars['DateTime']['output'];
  bookings: Array<BookingModel>;
  category: CategoryModel;
  categoryId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  host: UserModel;
  hostId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  images: Array<ImageModel>;
  location: Scalars['String']['output'];
  pricePerNight: Scalars['Float']['output'];
  reviews: Array<ReviewModel>;
  status: Scalars['Int']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
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
  createCategory: ResponseModel;
  createListing: ResponseModel;
  deleteCategory: ResponseModel;
  loginUser: LoginResponse;
  registerUser: LoginResponse;
  updateCategory: ResponseModel;
};


export type MutationCreateAmenityArgs = {
  createAmenityInput: CreateAmenityInput;
};


export type MutationCreateCategoryArgs = {
  data: CreateCategoryInput;
};


export type MutationCreateListingArgs = {
  data: CreateListingInput;
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['String']['input'];
};


export type MutationLoginUserArgs = {
  loginDto: LoginDto;
};


export type MutationRegisterUserArgs = {
  createUserDto: CreateUserInputDto;
};


export type MutationUpdateCategoryArgs = {
  data: UpdateCategoryInput;
  id: Scalars['String']['input'];
};

export type PaymentModel = {
  __typename?: 'PaymentModel';
  amount: Scalars['Float']['output'];
  booking: BookingModel;
  bookingId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  status: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type Query = {
  __typename?: 'Query';
  filteredListings: ListingLimitOffset;
  getCategoryById?: Maybe<CategoryModel>;
  listCategories: CategoryLimitOffset;
  sayHello: Scalars['String']['output'];
};


export type QueryFilteredListingsArgs = {
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  maxPrice?: InputMaybe<Scalars['Float']['input']>;
  minPrice?: InputMaybe<Scalars['Float']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort_col?: InputMaybe<Scalars['String']['input']>;
  sort_dir?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetCategoryByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryListCategoriesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort_col?: InputMaybe<Scalars['String']['input']>;
  sort_dir?: InputMaybe<Scalars['String']['input']>;
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

export type ReviewModel = {
  __typename?: 'ReviewModel';
  comment: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  listing: ListingModel;
  listingId: Scalars['String']['output'];
  rating: Scalars['Float']['output'];
  reviewer: UserModel;
  reviewerId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type UpdateCategoryInput = {
  name: Scalars['String']['input'];
};

export type UserModel = {
  __typename?: 'UserModel';
  bio: Scalars['String']['output'];
  bookings: Array<BookingModel>;
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  listings: Array<ListingModel>;
  name: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  reviews: Array<ReviewModel>;
  role: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  usercode: Scalars['String']['output'];
};

export type RegisterUserMutationVariables = Exact<{
  data: CreateUserInputDto;
}>;


export type RegisterUserMutation = { __typename?: 'Mutation', data: { __typename?: 'LoginResponse', code: number, deviceToken: string, message?: string | null, success: boolean, token: string } };

export type LoginUserMutationVariables = Exact<{
  data: LoginDto;
}>;


export type LoginUserMutation = { __typename?: 'Mutation', data: { __typename?: 'LoginResponse', code: number, deviceToken: string, message?: string | null, success: boolean, token: string } };



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

export const LoginUserDocument = `
    mutation loginUser($data: LoginDto!) {
  data: loginUser(loginDto: $data) {
    code
    deviceToken
    message
    success
    token
  }
}
    `;

export const useLoginUserMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<LoginUserMutation, TError, LoginUserMutationVariables, TContext>) => {
    
    return useMutation<LoginUserMutation, TError, LoginUserMutationVariables, TContext>(
      ['loginUser'],
      (variables?: LoginUserMutationVariables) => graphqlFetcher<LoginUserMutation, LoginUserMutationVariables>(LoginUserDocument, variables)(),
      options
    )};
