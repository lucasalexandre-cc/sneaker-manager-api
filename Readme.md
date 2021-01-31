# Typescript API Bootstrap

Hi Lucas. If you are reading this, you want to create a new api with typescript. I know you are lazy and you don't want to search how to configure a project again, with lint, prisma, ts-node-dev... That't why i'm here.

## In this project, you have:
- Node in version 12.14.0
- Eslint with prettier (recommended extensions)
- Postgres and Prisma
- Express
- Dotenv

## Which steps you need to do now?
- 1: create a new project on github, based on what you want to do
- 2: convert this project to your new project, and now all changes you need to do in your new project and not here
- 3: go to prisma/.env and update your database url, based on your new project
- 4: run the classic: ```npm i```
- 4: read the topic "About prisma" to remember how create your first model, and begin to code your new api

## About primsa
I think Prisma so much better to work with typescript. With prisma, if you want to create a new table, you can just do something like:
- Create your model, on prisma/schema.prisma
```
model User {
  id      Int      @default(autoincrement()) @id
  email   String   @unique
  name    String?
}
```
- After update the schema, you can generate migrations with command:
```
npx prisma migrate save --experimental
```
- Then, you can apply this migration on database, with the command:
```
npx prisma migrate up --experimental
```
- Now, you just need to update the default models that Prisma client creates for you (yeah, it create the models for you, so you don't need to worry with that).
```
npx prisma generate
```
And that' it. Be happy.
