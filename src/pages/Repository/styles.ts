import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
        display: flex;
        align-items: center;
        text-decoration: none;
        transition: color 0.2;

        &:hover {
            color: #666666;
        }

        svg {
            margin-right: 4px;
        }
    }
`;

export const RepositoryInfo = styled.div`
    margin-top: 80px;

    header {
        display: flex;
        align-items: center;
        
        img {
            width: 120px;
            height: 120px;
            border-radius:50%;
        }

        div {
            margin-left: 24px;

            strong {
                font-size: 36px;
                font-family: 'Roboto Slab', sans-serif;
                font-weight: bold;
                color: #3d3d3d;
                display: block;
            }

            span {
                font-size: 18px;
                line-height: 23px;
                color: #737380;
                margin-top: 4px;
            }
        }
    }

    ul {
        list-style: none;
        display: flex;
        align-items: center;
        margin-top: 40px;

    
        li {            
            & + li {
                margin-left: 30px;
            }

            strong {
                display: block;
                font-size: 36px;
                line-height: 42px;
                font-weight: bold;
            }

            span {
                font-size: 20px;
                color: #6C6C80;
            }
        }
    }
`;

export const IssuesInfo = styled.div`
    margin-top: 80px;
    
    a {
        background: #ffffff;
        border-radius: 5px;
        width: 100%;
        padding: 24px;
        display: block;
        display: flex;
        align-items: center;
        transition: transform 0.2s;

        & + a {
            margin-top: 16px;
        }

        &:hover {
            transform: translateX(10px);
        }
    
        div {
            margin: 0 16px;
            flex: 1;
    
            strong {
                font-size: 20px;
            }
    
            p {
                font-size: 18px;
                color: #a8a8b3;
                margin-top: 4px
            }
        }

        svg {
            margin-left: auto;
            color: #cbcbd6;
        }
    }    
`;