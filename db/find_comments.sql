select * from op_comments
join users on op_comments.user_id=users.user_id
where op_id = $1
order by comment_id desc