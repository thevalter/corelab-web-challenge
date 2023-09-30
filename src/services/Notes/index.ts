import { api } from "../../lib/api/axios";
import { CreateNoteData } from "../../components/CreateCard";

export const handleCreateNote = async (data: CreateNoteData) => {
    const response = await api.post('/create', data);
    console.log('teste');
    return console.log(response);
}

export const handleGetNotes = async () => {
    const response = await api.get('/');
    console.log(response);
    console.log(import.meta.env.API_URL);
    return response.data;
}