import styled from "styled-components";
type ContainerProps = {
    done: boolean;
}
export const Container = styled.div(({ done }: ContainerProps) => (
    `
    display: flex;
    background-color: #20212C;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    margin-top: 10px;
    justify-content: space-between;
    align-items: center;
    div{
        display: flex;
        align-items: center;
    }

    label{
        color: #CCC;
        text-decoration: ${done ? 'line-through' : 'initial'};
    }

    input{
        width: 25px;
        height: 25px;
        margin-right: 5px;
        cursor: pointer;
    }

   
    .deleteTask{
        background: transparent;
        border: 0;

        img{
            height: 25px;
            width: 25px;
        }
    }
    `
));