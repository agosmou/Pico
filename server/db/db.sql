-- creating a table in the psql shell to add the reviews components
-- Tip: use this area to draft the command, then copy and paste into psql shell
-- line 7 is using a foreign key to associate the review with a restaurant id

CREATE TABLE reviews (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    restaurant_id BIGINT NOT NULL REFERENCES restaurants(id),
    name VARCHAR(50) NOT NULL,
    review TEXT NOT NULL,
    rating INT NOT NULL check(rating >= 1 and rating <= 5)
);

--
-- \d reviews
--

INSERT INTO reviews (restaurant_id, name, review, rating) values (15, 'Josue', 'fantastic', 2);

-- select * from reviews where restaurant_id = 11;

--

select count(*) from reviews;

select MIN(rating) from reviews;

select MAX(rating) from reviews;

 select AVG(rating) from reviews;


   -- truncate to (2) decimal points
pico=#  select trunc(AVG(rating),2) from reviews;

-- output below
 trunc
-------
  3.20
(1 row)

-- -- notice that the column name changes. So, lets fix that with the below "AS [new name]"

pico=# select trunc(AVG(rating),2) AS average_review from reviews;
 average_review
----------------
           3.20
(1 row)


-- 
 select name, rating from reviews;
 select name AS username, rating from reviews AS rating;

-- table join methods
pico=# select * from restaurants left join reviews on restaurants.id=reviews.restaurant_id;
pico=#  select * from restaurants inner join reviews on restaurants.id=reviews.restaurant_id;
pico=# select * from restaurants right join reviews on restaurants.id=reviews.restaurant_id;
pico=#  select * from restaurants full outer join reviews on restaurants.id=reviews.restaurant_id;

-------------------------------------------------------------------------------
-- used in backend API for GET all
select * from restaurants 
    left join (
        select restaurant_id, 
            COUNT(*), 
            TRUNC(AVG(rating),1) as average_rating 
        from reviews 
        group by restaurant_id
    ) reviews on restaurants.id = reviews.restaurant_id;

-- used in backend API for GET one
    select * from restaurants 
    left join (
        select restaurant_id, 
            COUNT(*), 
            TRUNC(AVG(rating),1) as average_rating 
        from reviews 
        group by restaurant_id
    ) reviews on restaurants.id = reviews.restaurant_id where id=$1;