import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton ,Input} from '@mui/material';
import { Search } from '@mui/icons-material';


const SearchBar = () => {
    const [input,setInput] = useState('');
  return (
    <Paper 
        component="form"
        onSubmit={() => {}}
        sx={{
            borderRadius: 20,
            border: '1px solid #ffffff',
            pl: 2,
            boxShadow: 'none',
            mr: { sm: 5}
        }}
    >
        <Input
        value={input}
            placeholder="Search..."
            onChange={(e) => setInput(e.target.value)}
            disableUnderline={true}
        />
        <IconButton type="submit" sx={{p:'10px' , color: 'red'}}>
            <Search />
        </IconButton>
    </Paper>
  )
}

export default SearchBar