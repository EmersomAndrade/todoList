import * as Comp from './style';
import { Item } from '../../types/Item'
import { useState } from 'react';
import removeImg from '../../assets/remove.png';

type Props = {
    item: Item;
    remove: (taskId: number) => void;
}

export const ListItem = ({ item, remove }: Props) => {

    const [isChecked, setIsChecked] = useState(item.done);

    return (
        <Comp.Container done={isChecked}>
            <div>
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={e => setIsChecked(e.target.checked)}
                />
                <label>{item.name}</label>
            </div>

            <button className='deleteTask'
                onClick={() => remove(item.id)}
            >
                <img src={removeImg} alt="adicionar tarefa" />
            </button>
        </Comp.Container >
    );
}