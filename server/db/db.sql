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

select * from restaurants
    left join(
        select restaurant_id,
            count(*),
            TRUNC(AVG(rating, 1)) as average_rating
        from reviews
        group by restaurant_id
    ) reviews on restaurants.id = reviews.restaurant_id;