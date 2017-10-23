select users.user_id, original_posts.op_id, original_posts.op, original_posts.cat_id, users.user_name, users.img from original_posts
join categories on categories.cat_id=original_posts.cat_id
join users on users.user_id=original_posts.user_id
where original_posts.cat_id = $1
order by op_id desc