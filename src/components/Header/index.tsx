import { ContainerHeader, ContainerLogo, ContainerInput, Input } from './styles';
import { useSearchStore } from '../../store/searchStore';
import Logo from '../../assets/images/logo.png';
import search from '../../assets/images/search.svg';

export const Header = () => {
    
  const setSearchValue = useSearchStore((store) => store.setSearchValue);

    return (
        <ContainerHeader>
            <ContainerLogo>
                <img src={Logo} alt="" />
                <span>CoreNotes</span>
            </ContainerLogo>
            <ContainerInput>
                    <Input
                        type="text"
                        placeholder="Pesquisar Notas"
                        onChange={e => setSearchValue(e.target.value)}
                    />
                    <img src={search} alt="" />
                </ContainerInput>
        </ContainerHeader>
    )
}