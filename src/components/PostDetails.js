import React, { Component } from 'react';
import { Spinner, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

export default class PostDetails extends Component {
  state = {
    postdata: {},
    rating: 1,
    loading: true
  };
  getPostData = async url => {
    const postDetail = await axios.get(url);
    this.setState({ postdata: postDetail.data, loading: false });
  };
  getLatestPosts = async () => {
    this.setState({ loading: true });
    const latestPostsData = await axios.get('/latest_posts.json');
    await this.setState({ latestPosts: latestPostsData.data });
    const postId = this.props.match.params.id;
    const postdata = latestPostsData.data.find(
      post => post.id === Number(postId)
    );
    this.getPostData(postdata.uri);
  };

  componentDidMount() {
    this.getLatestPosts();
  }

  onStarClick = (nextValue, prevValue, name) => {
    this.setState({ rating: nextValue });
  };
  render() {
    // const { postdata, rating, loading } = this.state;
    // const { excerpt } = postdata;
    // const introText = postdata.content && postdata.content[0].text;
    // return (
    //   <div>
    //     {loading ? (
    //       <Spinner
    //         animation="border"
    //         variant="primary"
    //         role="status"
    //         style={{ marginLeft: '50%', marginTop: 300 }}
    //       >
    //         <span className="sr-only">Loading...</span>
    //       </Spinner>
    //     ) : (
    //       <div>
    //         <div className="thumbnail">
    //           <img
    //             className="my-image"
    //             src={postdata.thumbnail_url}
    //             alt={postdata.title}
    //             height="550"
    //             width="100%"
    //           />
    //         </div>
    //         <Container>
    //           <Row>
    //             <Col md={9} xs={12}>
    //               <div className="post-details">
    //                 <h1 className="heading">{postdata.title}</h1>
    //                 <div
    //                   className="excerpt"
    //                   dangerouslySetInnerHTML={{ __html: excerpt }}
    //                 />
    //                 <div
    //                   className="intro-text"
    //                   dangerouslySetInnerHTML={{ __html: introText }}
    //                 />
    //               </div>
    //             </Col>
    //             <Col md={3} xs={12}>
    //               <div className="author">
    //                 <Row>
    //                   <Col xs={5}>
    //                     <img
    //                       height="100%"
    //                       width="100%"
    //                       style={{ borderRadius: '50%' }}
    //                       src={postdata.author.image}
    //                       alt={postdata.author.name}
    //                     />
    //                   </Col>
    //                   <Col xs={7}>
    //                     <p>{postdata.author.name}</p>
    //                   </Col>
    //                 </Row>
    //                 <Row>
    //                   <Col xs={{ span: 7, offset: 5 }}>{postdata.date}</Col>
    //                 </Row>
    //               </div>
    //             </Col>
    //           </Row>
    //         </Container>
    //       </div>
    //     )}
    //   </div>
    // );

    return "khkgjfhds"
  }
}
