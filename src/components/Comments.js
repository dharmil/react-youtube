import React from 'react';

const renderComment = (comment) => {
    const snippet = comment.snippet.topLevelComment.snippet;

    return <div className = "comments_row">
        <img src = {snippet.authorProfileImageUrl} alt = "avatar" className = "comment_avatar" />
        <div class = "comment_description">
            <span>{snippet.authorDisplayName}</span>
            <span dangerouslySetInnerHTML={{__html: snippet.textDisplay}}></span>
        </div>
    </div>;
}

const Comments = (props) => {
    const {comments} = props;

    let loadMore = null;

    if(comments.length > 0) {
        loadMore = <center><input type = "button" value = "Load More" onClick={props.loadMoreComments} /></center>;
    }

    return <div className = "comments_container">
        {comments.map((comment) => renderComment(comment))}
        {loadMore}
        </div>;
}

export default Comments;