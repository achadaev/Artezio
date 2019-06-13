create database if not exists staff;

use staff;

create table if not exists employees(
	id int unsigned not null auto_increment primary key,
    first_name varchar(30) not null,
    last_name varchar(30) not null,
    post_id int unsigned not null,
    salary int unsigned not null
    );

create table if not exists posts(
	id int unsigned not null auto_increment primary key,
    post_name varchar(20) not null
    );

insert into posts(id, post_name) values(null, 'Director');

insert into posts(id, post_name) values(null, 'Administrator');

insert into posts(id, post_name) values(null, 'Manager');

insert into posts(id, post_name) values(null, 'Seller');

insert into employees (id, first_name, last_name, post_id, salary) values (null, 'Sergey', 'Viktorov', 1, 100000);

insert into employees (id, first_name, last_name, post_id, salary) values (null, 'Andrey', 'Mikhailov', 2, 70000);

insert into employees (id, first_name, last_name, post_id, salary) values (null, 'Svetlana', 'Alexeeva', 3, 50000);

insert into employees (id, first_name, last_name, post_id, salary) values (null, 'Dmitry', 'Sergeev', 4, 30000);

insert into employees (id, first_name, last_name, post_id, salary) values (null, 'Anastasia', 'Polyakova', 4, 35000);

insert into employees (id, first_name, last_name, post_id, salary) values (null, 'Alexey', 'Veselov', 4, 36000);

select * from staff.employees;

select * from staff.posts;

update employees set salary = 28000 where id = 6;

update employees set salary = 27000 where id = 5;

update employees set salary = 29000 where id = 3;

select * from employees where salary < 30000;

select * from employees where post_id = 4 and salary < 30000;

create table if not exists subordinates(
	id int unsigned auto_increment not null primary key,
    director_id int unsigned not null,
    subordinate_id int unsigned not null
    );

alter table subordinates add constraint st_director_id
foreign key (director_id) references employees(id)
on update cascade on delete cascade;

alter table subordinates add constraint st_subordinate_id
foreign key (subordinate_id) references employees(id)
on update cascade on delete cascade;

insert into subordinates(id, director_id, subordinate_id)
values (null, 1, 2), (null, 1, 3), (null, 1, 4), 
(null, 1, 5), (null, 1, 6), (null, 2, 3), (null, 2, 4),
(null, 2, 5), (null, 2, 6), (null, 3, 4), (null, 3, 5), (null, 3, 6);

select subordinate_id from subordinates
where director_id = 2;