import React from 'react';
import PostList from './PostList';
import UserList from './UserList';

const App = () => {

    return (
        <div className="ui container">
            <h1>App Component</h1>
            <PostList/>
            <UserList/>
        </div>)
}
export default App;
