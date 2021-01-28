import styled from 'styled-components/macro';
import {SaveOutlined} from '@ant-design/icons';

export const Header = styled.div`
    width: 100%;
    text-align: center;
    color: white;
`;
export const Title = styled.p`
    font-size: 1.5rem;
`;
export const Body = styled.div`
    background-color: #fff;
    padding: 5px 10px;
`;
export const Field = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 5px 0;
    box-sizing: border-box;
`;
export const Label = styled.p`
    width: 20%;
    color: grey;
`;
export const Input = styled.input`
    width: 80%;
    font-size: 1rem;
    height: 30px;
    border-radius: 2px;
    outline: none;
    color: grey;
    border: .3px solid grey;

    &:hover {
        border: .3px solid orange;
    }
    &:focus {
        outline: none;
    }
`;
export const SaveIcon = styled(SaveOutlined)`
    margin-right: 10px;
`;
export const Submit = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: #04ca1ee8;
    border-radius: 2px;
    height: 40px;
    color: white;
    font-weight: 600;
    cursor: pointer;
`;
export const Text = styled.p`

`;

export const Container = styled.div`
    position: fixed;
    top: 25%;
    left: 25%;
    display: flex;
    flex-direction: column;
    width: 60%;
    border: .0px solid grey;
    border-radius: 2px;
    background-color: grey;
    box-shadow: 0px 0px 5px 0px #383838b5;
    padding: 0;
    box-sizing: border-box;

    @media (max-width: 500px) {
        width: 90%;
        & ${Title} {
            font-size: 1.3rem;
        }
    }

    @media (min-width: 700px) {
        width: 40%;
    }

    & * {
        box-sizing: border-box;
    }
`;