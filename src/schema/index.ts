import {gql} from "apollo-server"

const typeDefs = gql`
 type Query {
    posts: [Post!]!
 }

 type Mutation {
   postCreate(input:PostInput!):PostPayloadResponse
   postUpdate(postId: ID!,input:PostInput!):PostPayloadResponse
   postDelete(postId:ID!):PostPayloadResponse
   signUp(email:String!, password:String! name:String!, bio:String!):SignUpPayloadResponse
 }

 type SignUpPayloadResponse {
  errors: [ErrorMessage!]!
  token: String
 }

 input PostInput {
   title: String
   content: String
 }

 type ErrorMessage {
   message: String!
 }

 type PostPayloadResponse {
   errors: [ErrorMessage!]!
   post:Post
 }

 type Profile {
   id:ID!
   bio:String!
   user: User!
 }

 type Post {
   id:ID!
   title: String!
   content:String!
   published:Boolean!
   createdAt:String!
   author:User!
 }

 type User {
   id:ID!
   email:String!
   name:String!
   profile : Profile!
   posts : [Post!]!
 }
`

export default typeDefs;