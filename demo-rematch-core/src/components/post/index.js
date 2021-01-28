import React from 'react';
import {
    Container,
    Group,
    Title, 
    Entities,
    Content, 
    Image,
    LikeButton,
    CommentButton,
    DeleteButton,
    EditButton,
    Input,
    Text,
} from './style/post';

export default function Post ({ children, ...restProps }) {
    return <Container {...restProps}>{ children }</Container>
}

Post.Group = ({ children, ...restProps }) => {
    return <Group {...restProps}>{ children }</Group>   
}

Post.Title = ({ children, ...restProps }) => {
    return <Title {...restProps}>{children}</Title>
}

Post.Entities = ({ children, ...restProps }) => {
    return <Entities {...restProps}>{children}</Entities>
}

Post.Content = ({ children, ...restProps }) => {
    return <Content {...restProps}>{children}</Content>
}

Post.Text = ({ children, ...restProps }) => {
    return <Text {...restProps}>{children}</Text>
}

Post.Image = ({ children, ...restProps }) => {
    return <Image {...restProps}>{children}</Image>
}

Post.LikeButton = ({ children, ...restProps }) => {
    return <LikeButton {...restProps}>{children}</LikeButton>
}

Post.CommentButton = ({ children, ...restProps }) => {
    return <CommentButton {...restProps}>{children}</CommentButton>
}

Post.DeleteButton = ({ children, ...restProps }) => {
    return <DeleteButton {...restProps}>{children}</DeleteButton>
}

Post.EditButton = ({ children, ...restProps }) => {
    return <EditButton {...restProps}>{ children }</EditButton>
}

Post.Input = ({ children, ...restProps }) => {
    return <Input {...restProps}>{children}</Input>
}


