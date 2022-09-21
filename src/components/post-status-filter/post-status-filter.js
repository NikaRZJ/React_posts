import React from "react";
import { Button } from "reactstrap";
import './post-status-filter.css'
const PostStatusFilter = () => {
    return (
        <div className="btn-group" >
            <Button color='info'>Все</Button>
            <button type="button"
                className="btn btn-outline-secondary">
                Понравлиось
            </button>
        </div >
    );
}

export default PostStatusFilter;
