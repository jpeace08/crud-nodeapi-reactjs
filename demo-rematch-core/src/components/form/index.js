import React from 'react';
import {
    Container,
    Header,
    Title,
    Body,
    Field, 
    Label,
    Input,
    SaveIcon,
    Submit,
    Text,
} from './style/form';

export default function Form({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>;
}

Form.Header = ({ children, ...restProps }) => {
    return <Header {...restProps}>{children}</Header>;
}

Form.Title = ({ children, ...restProps }) => {
    return <Title {...restProps}>{children}</Title>;
}

Form.Header = ({ children, ...restProps }) => {
    return <Header {...restProps}>{children}</Header>;
}

Form.Body = ({ children, ...restProps }) => {
    return <Body {...restProps}>{children}</Body>;
}

Form.Field = ({ children, ...restProps }) => {
    return <Field {...restProps}>{children}</Field>;
}

Form.Label = ({ children, ...restProps }) => {
    return <Label {...restProps}>{children}</Label>;
}

Form.Input = ({ children, ...restProps }) => {
    return <Input {...restProps}>{children}</Input>;
}

Form.SaveIcon = ({ children, ...restProps }) => {
    return <SaveIcon {...restProps}>{children}</SaveIcon>;
}

Form.Submit = ({ children, ...restProps }) => {
    return <Submit {...restProps}>{children}</Submit>;
}

Form.Text = ({ children, ...restProps }) => {
    return <Text {...restProps}>{children}</Text>;
}