import {
  ContainerCard,
  CardHeader,
  CardInput,
  EditOptions,
  CardFooter,
  CardTextArea,
  EditColor,
  EditNote,
  CardTitle,
  CardContent,
} from './styles';
import {
  CreateInputFavorite,
  InputFavoriteWrapper,
  Line,
} from '../CreateCard/styles';
import { useState, useEffect } from 'react';
import { Note } from '../RenderCardNotes';
import closeNote from '../../assets/images/closeNote.svg';
import colorEdit from '../../assets/images/colorEdit.svg';
import editNote from '../../assets/images/editNote.svg';
import checkEdit from '../../assets/images/check.svg';
import { ColorPicker } from './ColorPicker';
import { handleUpdate } from '../../services/Notes';
import { FavoriteIcon } from '../FavoriteIcon';
import { z } from 'zod';
import { useMutation } from 'react-query';
import { queryClient } from '../../context/QueryContext';
import { useDeleteNote } from '../../hooks/useDeleteNote';
import { AnimatePresence, motion } from 'framer-motion';

interface CardProps {
  note: Note
}

const editNoteSchema = z.object({
  desc: z.string().nonempty(),
  title: z.string().nonempty(),
  favorite: z.boolean(),
  color: z.string()
});

export type EditNoteData = z.infer<typeof editNoteSchema>

export const Card = ({ note }: CardProps) => {

  const [isOpenColorPicker, setIsOpenColorPicker] = useState(false);
  const [isEditNote, setIsEditNote] = useState(false);
  const [color, setColor] = useState(note.color);
  const [favorite, setFavorite] = useState(note.favorite);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [error, setError] = useState(false);
  const deleteNote = useDeleteNote(note._id);

  const mutation = useMutation((data: EditNoteData) => handleUpdate(data, note._id), {
    onSuccess: () => {
      queryClient.invalidateQueries('notes')
      setTimeout(() => {
        setIsEditNote(false);
      }, 200)
    },
  });

  const handleSubmit = async (e: React.SyntheticEvent) => {

    e.preventDefault();

    const data = {
      desc,
      title,
      favorite,
      color: note.color
    }

    try {
      const validatedForm = editNoteSchema.parse(data);
      await handleUpdate(validatedForm, note._id);
      mutation.mutate(data);
    } catch (err) {
      setError(true);
    }
  };
  
  useEffect(() => {
    note.favorite = favorite;
    isEditNote ? null : handleUpdate(note, note._id);
    mutation.mutate(note);
  }, [favorite])

  useEffect(() => {
    setFavorite(note.favorite);
  }, [note])

  return (
    <ContainerCard
      onSubmit={handleSubmit}
      color={note.color}
      layout
      transition={{
        layout: { duration: 0.4 },
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <CardHeader>
        {isEditNote && (
          <CardInput
          className={error ? 'inValid' : 'valid'}
          placeholder={error ? 'o Titulo é obrigatório' : 'Titulo'}
            defaultValue={note.title}
            value={title}
            onChange={e => setTitle(e.currentTarget.value)}
          />
        )}

        {!isEditNote && <CardTitle>{note.title}</CardTitle>}
        <InputFavoriteWrapper>
          <CreateInputFavorite
            type="checkbox"
            onChange={() => setFavorite(!favorite)}
            checked={favorite}
          />
          <FavoriteIcon />
        </InputFavoriteWrapper>
        <Line />
      </CardHeader>
      <AnimatePresence>
        {isEditNote && (
          <CardTextArea
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            className={error ? 'inValid' : 'valid'}
            placeholder={error ? 'A descrição da tarefa é obrigatória' : 'Criar nota...'}
            defaultValue={note.desc}
            value={desc}
            onChange={e => setDesc(e.currentTarget.value)}
            spellCheck="false"
          />
        )}

        {!isEditNote && <CardContent>{note.desc}</CardContent>}
      </AnimatePresence>
      <CardFooter>
        <EditOptions>
          <EditNote
            onClick={() => setIsEditNote((prev) => !prev)}
          >
            <img src={editNote} alt="" />
          </EditNote>
          <EditColor
            onClick={() => setIsOpenColorPicker(!isOpenColorPicker)}
          >
            <img src={colorEdit} alt="" />
          </EditColor>
          <AnimatePresence>
            {isOpenColorPicker ? (
              <ColorPicker
                setColor={setColor}
                note={note}
                setIsOpenColorPicker={setIsOpenColorPicker}
              />
            ) : null}
          </AnimatePresence>
        </EditOptions>
        <EditOptions>
          <AnimatePresence>
            {isEditNote && (
              <motion.div
                initial={{ y: 10 }}
                animate={{ y: 0 }}
                exit={{ y: 10, opacity: 0 }}
              >
                <img
                  src={checkEdit}
                  width={20}
                  onClick={handleSubmit}
                  alt=""
                />
              </motion.div>
            )}
          </AnimatePresence>
          <img
            src={closeNote}
            width={16}
            onClick={() => deleteNote.mutate()}
            alt=""
          />
        </EditOptions>
      </CardFooter>
    </ContainerCard>
  )
}