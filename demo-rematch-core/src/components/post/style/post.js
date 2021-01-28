import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { LikeOutlined, CommentOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons'

export const Container = styled.div`
    display: flex;
    flex-direction: ${({ direction }) => direction === 'row' ? 'row' : 'column'};
    border: .3px solid #f7f7f7;
    width: ${({ width }) => `${width}` };
    height: auto;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0px 0px 5px 2px #7979798a;
    margin-bottom: 20px;
    margin-left: 30px;
    padding: 5px;

    &:last-of-type {
        margin-bottom: 0px;
    }

    @media (max-width: 700px) {
        width: 90%;
        margin-left: 0;
    }
`;

export const Group = styled.div`
    display: flex;
    flex-direction: ${({ direction }) => direction === 'row' ? 'row' : 'column'};
    flex-wrap: wrap;
    ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
    ${({ margin }) => margin && `margin: ${margin}`};
    
    @media (max-width: 650px) {
        flex-direction: column;
        >${Container} {
            width: 90%;
        }
    }
`;

export const Title = styled(Link)`
    font-size: 1.3rem;
    text-decoration: none;
    color: #313131;
    font-weight: 600;
    margin: 5px 0;
`;

export const Entities = styled.div`
    align-items: ${({direction}) => direction==='row'?'center':''};
    width: 100%;
    display: flex;
    flex-direction: ${({direction}) => direction==='row' ? 'row':'column'};
`;

export const Content = styled.div`

`;

export const Image = styled.img`
    width: ${({width}) => width};
    height: ${({ height }) => height};
    border-radius: 50%;
    margin-right: 20px;

    @media (max-width: 660px) {
        margin-right: 1px;
    }
`;

export const LikeButton = styled(LikeOutlined)`
    color: #195487;
    cursor: pointer;
    margin-right: 10px;
    font-size: 1.3rem;
    &:hover, :active, :focus {
        outline: none;
    }
    &:hover {
        color: #195487cf;
    }
`;

export const EditButton = styled(EditOutlined)`
    cursor: pointer;
    margin-right: 10px;
    font-size: 1.3rem;
    color: #2f2f2f;
    &:hover, :active, :focus {
        outline: none;
    }
    &:hover {
        color: orange;
    }
`;

export const CommentButton = styled(CommentOutlined)`
    cursor: pointer;
    margin-right: 10px;
    font-size: 1.3rem;
    color: #2f2f2f;
    &:hover, :active, :focus {
        outline: none;
    }
    &:hover {
        color: grey;
    }
`;

export const DeleteButton = styled(DeleteOutlined)`
    cursor: pointer;
    margin-right: 10px;
    font-size: 1.3rem;
    color: #2f2f2f;
    &:hover, :active, :focus {
        outline: none;
    }
    &:hover {
        color: red;
    }
`;

export const Input = styled.input`

`;
export const Text = styled.p`
    text-align: justify;
    font-size: 1rem;
    color: #383838;
    margin: 5px 0;
`;