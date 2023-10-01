import {Card} from '../Card';
import { CardContainer, Title } from './styles';
import { useQuery } from 'react-query';
import { handleGetNotes } from '../../services/Notes';
import { useSearchStore } from '../../store/searchStore';
import { useFilterColors } from '../../hooks/useFilterColors';
import { Loading } from '../Loading';

export interface Note {
  _id: string
  title: string
  desc: string
  favorite: boolean
  color: string
}

export const RenderCardNotes = () => {
  const { data: notes, isLoading } = useQuery('notes', handleGetNotes);
  const searchValue = useSearchStore((store) => store.searchValue);
  const colorsFilter = useFilterColors();

  const filteredNotes = notes?.filter((note: Note) => {

    return (
      note.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      note.desc.toLowerCase().includes(searchValue.toLowerCase()) ||
      colorsFilter[searchValue.toLowerCase()]?.includes(note.color)
    )
  })

  return (
    <>
      {isLoading && <Loading/>}
        {!isLoading && (
          <>
          <div>
            <Title>Favoritos</Title>
            <CardContainer>
              {filteredNotes
                ?.filter((item: Note) => item.favorite)
                .map((note: Note) => {
                  return <Card key={note._id} note={note} />
                })}
            </CardContainer>
          </div>
          <div>
            <Title>Outros</Title>
            <CardContainer>
              {filteredNotes
                ?.filter((item: Note) => !item.favorite)
                .map((note: Note) => {
                  return <Card note={note} key={note._id} />
                })}
            </CardContainer>
          </div>
        </>
        )}
    </>
  )
}