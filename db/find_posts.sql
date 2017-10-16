select op from original_posts
join categories on categories.cat_id=original_posts.cat_id
where original_posts.cat_id = $1
