import { api } from "../../lib/api/axios";
import { CreateNoteData } from "../../components/CreateCard";
import { EditNoteData } from "../../components/Card";

export const handleCreateNote = async (data: CreateNoteData) => {
    const response = await api.post('/create', data);
    return response;
}

export const handleUpdate = async (data: EditNoteData, id: string) => {
    const response = await api.put(`/${id}`, data);
    return response.data
}

export const handleDeleteNote = async (id: string) => {
    const response = await api.delete(`/${id}`)
    return response.data
  }

export const handleGetNotes = async () => {
    const response = await api.get('/');
    return response.data;
}