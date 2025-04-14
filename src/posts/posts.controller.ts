import { Controller, Post, Get, Body, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Body() createPostDto: CreatePostDto, @Request() req) {
    return this.postsService.createPost(req.user.id, createPostDto);
  }

  @Get('user')
  @UseGuards(JwtAuthGuard)
  async getByUser(@Request() req) {
    return this.postsService.getPostsByUser(req.user.id);
  }
}