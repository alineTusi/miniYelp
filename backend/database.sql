create table city (
    id serial primary key,
    name varchar(255)
);

create table restaurant (
    id serial primary key,
    name varchar(255),
    picture varchar(255),
    city_id int,
    FOREIGN KEY (city_id) REFERENCES city(id)
);

create table comment (
    id serial primary key,
    text text,
    date timestamp,
    restaurant_id int,
    FOREIGN KEY (restaurant_id) REFERENCES restaurant(id)
);

create table tag (
    id serial primary key,
    name varchar(255)
);

create table restaurant_has_tags (
    id_restaurant int,
    id_tag int,
    FOREIGN KEY (id_restaurant) REFERENCES restaurant(id),
    FOREIGN KEY (id_tag) REFERENCES tag(id)
);

drop table restaurant;
drop table comment;
drop table city;
drop table restaurant_has_tags;

-- insert into restaurant_has_tags(id_restaurant, id_tag) values (1,1);

insert into city (name) values ('Berlin');
insert into city (name) values ('Amsterdam');
insert into city (name) values ('Oslo');
insert into city (name) values ('Peking');

insert into restaurant (name, picture, city_id) values ('Sboccondivino', 'https://s3-media0.fl.yelpcdn.com/bphoto/914Shzdhxn3w_8bbmHiBsw/o.jpg', 1);
insert into restaurant (name, picture, city_id) values ('Steel Vintage Bikes Café', 'https://s3-media0.fl.yelpcdn.com/bphoto/RL1b6QScsLQKXbYSfSGZKw/o.jpg', 1);
insert into restaurant (name, picture, city_id) values ('Zollpackhof', 'https://s3-media0.fl.yelpcdn.com/bphoto/o3EWtmAt-UFBTxSi2hj_ig/o.jpg', 1);
insert into restaurant (name, picture, city_id) values ('Steel Vintage Bikes Café', 'https://s3-media0.fl.yelpcdn.com/bphoto/RL1b6QScsLQKXbYSfSGZKw/o.jpg', 1);
insert into restaurant (name, picture, city_id) values ('Nguyen Kitchen Sushi & More', 'https://s3-media0.fl.yelpcdn.com/bphoto/VPGXAwzkvAmxFa8DHiQl8Q/o.jpg', 2);
insert into restaurant (name, picture, city_id) values ('Sampurna', 'https://s3-media0.fl.yelpcdn.com/bphoto/i6mPn3NRB8rYKXsuFsmoyw/o.jpg', 2);
insert into restaurant (name, picture, city_id) values ('Café De Klos', 'https://s3-media0.fl.yelpcdn.com/bphoto/y5dzj3AbNoSHvrQfg4dTdw/o.jpg', 2);
insert into restaurant (name, picture, city_id) values ('RED', 'https://s3-media0.fl.yelpcdn.com/bphoto/5pvjDGML_Zp8IaXRSFmxtg/o.jpg', 3);
insert into restaurant (name, picture, city_id) values ('Wurst & Schnitzelhaus - WuSH', 'https://s3-media0.fl.yelpcdn.com/bphoto/34Yj3Gs06LgmtBBnQUZbrg/o.jpg', 3);
insert into restaurant (name, picture, city_id) values ('King/s Joy', 'https://youimg1.tripcdn.com/target/01067120008rrnyk81A4A.jpg', 4);
insert into restaurant (name, picture, city_id) values ('Pantry', 'https://s3-media0.fl.yelpcdn.com/bphoto/kAI1aJQg_BwCCYdQPkKs6g/o.jpg', 4);

insert into comment (text, date, restaurant_id) values ('The food is alright.  Wait staff is so rude. There are better Indian restaurants out there.',
    '2022-05-01',
    2);

insert into comment (text, date, restaurant_id) values ('I came with great anticipation with friends who always rave about this restaurant.  It did not deliver. 
    The food was good, but I expected awesome.  The service was terrible.  Our drinks came well after our food arrived.  We ordered rice which came after the meal 
    was almost completed.  Our second orders of food never came and our server disappeared for 30 minutes.  While I suspect staffing shortages were apart of the 
    challenges, for the price and expectation, I would not recommend this restaurant..',
    '2022-07-05',
    3);

insert into comment (text, date, restaurant_id) values ('While the presentation and ambience were really nice and the chai during the wait was a nice touch 
    the food was mediocre. The special pav Bhaji was volcanic with no flavor. The chefs special black dal was red, with an overpowering tomato base. Big let down 
    considering the build up and the hour long wait...',
    '2022-08-12',
    4);

insert into comment (text, date, restaurant_id) values ('I went here its amazing. Food was delicious, whatever we ordered there just arrived on time and it was 
    all pleasantly decorated. Ambience was perfect and the customer support staff were highly accommodating too.',
    '2021-01-01',
    5);

insert into comment (text, date, restaurant_id) values ('Wonderful dining experience when in London.  We went to the Covent Garden location.  It was fabulous! 
    My husband likes Indian food but after Dishoom, he has changed his tune!  Our adult boys were with us, youngest was studying abroad in London & they love it too. 
    Our son wished he would have discovered it while he was there, rather than on the last day of our visit to pick him up & bring him home!  Great food,
    lots of variety for all tastes.  Definitely a crowd pleaser!', '2022-04-05', 6);

insert into comment (text, date, restaurant_id) values ('The food is alright.  Wait staff is not rude. There are better Chinese restaurants out there.', '2022-05-01', 2);

insert into comment (text, date, restaurant_id) values ('My partner and I were seated quickly on a Saturday evening and the service was quick. The food was so 
    delicious! My favorite was the tiki masala chicken and chili nann.',
    '2022-12-05',
    7);

insert into comment (text, date, restaurant_id) values ('Cozy and pleasant atmosphere with attentive and helpful service. A group of 3 of us came here on a Friday 
    evening around 7pm for dinner. We ordered samosas for appetizers, sag paneer, chicken tika masala, butter chicken, and acharri murgha. The food itself was 
    bland and underwhelming. Not seasoned enough, sauce and meat included. If you are looking for a lot of flavor and authenticity, this aint it.',
    '2022-1-09',
    8);

insert into comment (text, date, restaurant_id) values ('Overpriced. Below average food. The taste is blended. Not very attentive service, server seemed annoyed 
    after couple questions about the menu from us. Seems a lot of people come here for pre show dinner only, most of them finished meal really fast. One positive star 
    is their interior design is quite nice.',
    '2022-8-12',
    9);

insert into comment (text, date, restaurant_id) values ('The fish and chips dinner was absolutely delicious. Very large portions. We could not have been happier!',
    '2022-12-12',
    10);

insert into comment (text, date, restaurant_id) values ('First of all, let me start by saying I have been religiously following Bao on Instagram for years even before 
    I have ever been to London. When I finally got to visit post-Covid in January, I went to their SoHo location and got to try their fried chicken and confit baos 
    which I both loved! These are textbook amazing baos that are of quality and surprisingly filling for what it is. The bun of the fried chicken one is also somewhat 
    made with sesame which I liked. I got one of their alcoholic spritz which complemented my order well.',
    '2022-01-11',
    11);

insert into tag (name) values ('Italian cuisine');
insert into tag (name) values ('German cuisine');
insert into tag (name) values ('Asian Cuisine');
insert into tag (name) values ('coffee light meal');

insert into restaurant_has_tags (id_restaurant, id_tag) values (2, 1);
insert into restaurant_has_tags (id_restaurant, id_tag) values (4, 2);
insert into restaurant_has_tags (id_restaurant, id_tag) values (10, 2);
insert into restaurant_has_tags (id_restaurant, id_tag) values (6, 3);
insert into restaurant_has_tags (id_restaurant, id_tag) values (7, 3);
insert into restaurant_has_tags (id_restaurant, id_tag) values (3, 4);
insert into restaurant_has_tags (id_restaurant, id_tag) values (8, 4);

select * from restaurant;
select * from city;
select * from comment;
select * from tag;