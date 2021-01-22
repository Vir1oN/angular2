import { Component, OnInit } from '@angular/core';
import {Post} from '../../../models/post';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  pinnedPost: Post;
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
      console.log(this.posts);
    });
  }

  getBubble(post: Post): void {
    this.pinnedPost = post;
  }
}
