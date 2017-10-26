select * from original_posts
where user_id = $1
order by op_id desc