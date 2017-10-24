select * from original_posts
join users on original_posts.user_id=users.user_id
where op_id = $1