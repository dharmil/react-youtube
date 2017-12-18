import React from 'react';
import "../grid.css";

const renderComment = (comment) => {
    const snippet = comment.snippet.topLevelComment.snippet;

    const style = {
        borderRadius: '25px'
    };

    return <tr key = {comment.id}>
        <td colSpan = "20%"><img src = {snippet.authorProfileImageUrl} alt = "avatar" height="40" width="40" style = {style} /></td>
        <td colSpan = "80%"><div>{snippet.authorDisplayName}</div><div>{snippet.textOriginal}</div></td>
    </tr>;
}

const Comments = (props) => {
    const {comments} = props;

    let loadMore = null;

    if(comments.length > 0) {
        loadMore = <div className = "row center-xs"><input type = "button" value = "Load More" onClick={props.loadMoreComments} /></div>;        
    }

    return <div><table><tbody>
        {comments.map((comment) => renderComment(comment))}
    </tbody></table>{loadMore}</div>;
}

export default Comments;