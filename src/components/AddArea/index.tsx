import * as Comp from './style';
import { useState, KeyboardEvent } from 'react';
import addImg from '../../assets/add.png';

type Props = {
    onEnter: (taskName: string) => void
}
export const AddArea = ({ onEnter }: Props) => {
    const [inputText, setInputText] = useState('');

    const handleKeyUp = (e: KeyboardEvent) => {
        if (e.code === 'Enter' && inputText !== '') {
            onEnter(inputText);
            setInputText('');
        }
    }
    return (
        <Comp.Container>
            <div className="image">
                <img src={addImg} alt="adicionar tarefa" />
            </div>
            <input
                type="text"
                placeholder='Adicione uma tarefa'
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                onKeyUp={handleKeyUp}
            />

        </Comp.Container>
    );
}
