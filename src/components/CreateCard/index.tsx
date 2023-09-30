import {
    CreateForm,
    CreateInputTitle,
    CreateHeader,
    Line,
    CreateTextArea,
    InputFavoriteWrapper,
    CreateInputFavorite,
    AddNote,
} from './styles';
import { FavoriteIcon } from '../FavoriteIcon';
import { AnimatePresence } from 'framer-motion';
import { z } from 'zod';
import { useRef, useState } from 'react';
import { handleCreateNote } from '../../services/Notes';
import { useMutation } from 'react-query';
import { queryClient } from '../../context/QueryContext';

const createNoteSchema = z.object({
    desc: z.string().nonempty(),
    title: z.string().nonempty(),
    favorite: z.boolean(),
})

export type CreateNoteData = z.infer<typeof createNoteSchema>

export const CreateCard = () => {

    const textAreaRef = useRef<HTMLTextAreaElement | null>(null)

    const [favorite, setFavorite] = useState(false);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [error, setError] = useState(false);

    const mutation = useMutation(handleCreateNote, {
        onSuccess: () => {
            queryClient.invalidateQueries('notes')
          },
    })

    const handleSubmit = async (e: React.SyntheticEvent) => {

        e.preventDefault();

        const data = {
            desc,
            title,
            favorite
        }

        try {
            const validatedForm = createNoteSchema.parse(data);
            await handleCreateNote(validatedForm);
            mutation.mutate(data);
        } catch (err) {
            setError(true);
        }
    };

    const handleChange = () => {
        if (textAreaRef.current) {
            textAreaRef.current.style.height = '100%'
            const scrollHeight = textAreaRef.current.scrollHeight
            textAreaRef.current.style.height = scrollHeight + 'px'
        }
    }

    return (
        <CreateForm onSubmit={handleSubmit}>
            <CreateHeader>
                <CreateInputTitle
                className={error ? 'inValid' : 'valid'}
                    placeholder={error ? 'o Titulo é obrigatório' : 'Titulo'}
                    value={title}
                    onChange={e => setTitle(e.currentTarget.value)}
                />
                <InputFavoriteWrapper>
                    <CreateInputFavorite
                        type="checkbox"
                        onChange={e => setFavorite(e.currentTarget.checked)}
                        checked={favorite}
                    />
                    <FavoriteIcon />
                </InputFavoriteWrapper>
            </CreateHeader>
            <Line />
            <CreateTextArea
                ref={(e) => textAreaRef.current = e}
                spellCheck="false"
                className={error ? 'inValid' : 'valid'}
                placeholder={error ? 'A descrição da tarefa é obrigatória' : 'Criar nota...'}
                onInput={handleChange}
                value={desc}
                onChange={e => setDesc(e.currentTarget.value)}
            />
            <AnimatePresence>
                <AddNote
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 10, opacity: 0 }}
                    transition={{ stiffness: 20 }}
                    type="submit"
                >
                    Adicionar
                </AddNote>
            </AnimatePresence>
        </CreateForm>
    )
}