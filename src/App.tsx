import { useState } from 'react';
import * as Comp from './App.styles';
import { GlobalStyle } from './styles/global';
import { Item } from './types/Item';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';


export function App() {
    const [list, setList] = useState<Item[]>([
        { id: 1, name: 'estudar inglês', done: false },
        { id: 2, name: 'fazer exercicios', done: false },
        { id: 3, name: 'ler  2 paginas', done: true },
        { id: 4, name: 'comprar pão', done: false },
    ]);

    const handleAddTask = (taskName: string) => {
        let newList = [...list];
        newList.push({
            id: list.length + 1,
            name: taskName,
            done: false
        });
        setList(newList);
    }


    const handleRemoveTask = (taskId: number) => {
        const index = list.findIndex((task: Item) => task.id === taskId);
        list.splice(index, 1);
        let newList = [...list];
        setList(newList);
    }

    return (
        <>
            <Comp.Container>
                <Comp.Area>
                    <Comp.Header>Lista de Tarefas</Comp.Header>
                    <AddArea onEnter={handleAddTask} />
                    {list.map((item, index) => (
                        <ListItem key={index} item={item} remove={handleRemoveTask} />
                    ))}
                </Comp.Area>
            </Comp.Container>
            <GlobalStyle />
        </>
    );
}


