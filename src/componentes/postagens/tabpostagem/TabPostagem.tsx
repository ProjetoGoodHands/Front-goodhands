import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';
import { Link } from 'react-router-dom';


function TabPostagem() {
  const [value, setValue] = useState('1')
  function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
    setValue(newValue);
  }
  return (
    <>
      <TabContext value={value} >
        <AppBar position="static" className='tabcor'>
          <Tabs centered indicatorColor="secondary" onChange={handleChange}>
          
            <Link to="/formulariopostagem" className="corletras">
              <Tab label="Criar postagem" value="2" />
            </Link>
            <Link to="/formulariotema" className="corletras">
              <Tab label="Cadastrar causa" value="3" />
            </Link>
           
          </Tabs>
        </AppBar>
        <TabPanel value="1" >
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaPostagem />
          </Box>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabPostagem;