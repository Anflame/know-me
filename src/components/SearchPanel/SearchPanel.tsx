import { FC, useState, FormEvent } from 'react';
import { useRouter } from 'next/router';
import { Stack, useTheme } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import { StyledIconButton, StyledTextField } from './styles';

const SearchPanel: FC = () => {
  const { spacing } = useTheme();
  const [value, setValue] = useState('');

  const { push } = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    push(`/mentors?${new URLSearchParams({ search: value })}`, '', {
      scroll: false,
    });
  };

  return (
    <Stack
      direction="row"
      justifyContent="center"
      mt={spacing(8)}
      component="form"
      onSubmit={(e) => handleSubmit(e)}
    >
      <StyledTextField
        placeholder="Поиск..."
        color="secondary"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <StyledIconButton type="submit">
        <SearchIcon color="secondary" />
      </StyledIconButton>
    </Stack>
  );
};

export default SearchPanel;
