function curtirPost(postId) {
    const postRef = db.ref("posts/" + postId + "/likes");

    postRef.transaction((curtidas) => {
        return (curtidas || 0) + 1;
    });
}
