import React, { Component } from 'react';
import Post from './Post';
import jobsData from '../data/jobs.json';

export default class LatestPosts extends Component {
 
  render() {
    console.log('jobsData: ',jobsData)
    return (
      <div>    
          <Post LatestPostsData={jobsData} />
 
      </div>
    );
  }
}
