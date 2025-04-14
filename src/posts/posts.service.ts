import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { Post } from './interfaces/post.interface';

@Injectable()
export class PostsService {
  private posts: Post[] = [];
  private idCounter = 1;

  async createPost(userId: string, createPostDto: CreatePostDto): Promise<Post> {
    const newPost = {
      id: this.idCounter++,
      title: createPostDto.title,
      content: createPostDto.content,
      authorId: userId,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    
    this.posts.push(newPost);
    return newPost;
  }

  async getPostsByUser(userId: string): Promise<Post[]> {
    return this.posts
      .filter(post => post.authorId === userId)
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }
}