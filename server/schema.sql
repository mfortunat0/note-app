create table notes(
    id serial primary key,
    title varchar(200) not null,
    content text not null,
    createdAt varchar(10),
    updatedAt varchar(10)
)